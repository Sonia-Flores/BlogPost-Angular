import { Component, inject } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { POSTS } from '../../data/posts.db';
import { Post } from '../../interfaces/post.interface';


@Component({
  selector: 'app-lista-posts',
  standalone: true,
  imports: [],
  templateUrl: './lista-posts.component.html',
  styleUrl: './lista-posts.component.css'
})
export class ListaPostsComponent {

    arrPosts: Post[] = []
    categorias:string[] = []
    POSTS: Post[] = POSTS
    postService = inject(PostsService)

    ngOnInit(){
      this.arrPosts = this.postService.getAll();
      this.categorias = this.postService.getCategories()
    }

    onChange($event: any) {
      if($event.target.value === "todo"){
        return this.arrPosts = this.postService.getAll();
      }
      return this.arrPosts = this.postService.getByCategory($event.target.value);
    }

}
