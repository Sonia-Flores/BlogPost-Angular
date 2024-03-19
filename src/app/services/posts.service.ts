import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { POSTS } from '../data/posts.db';


@Injectable({
  providedIn: 'root'
})
export class PostsService {


  createPost(post: Post){
    const fechaActual = new Date();
    const fechaFormateada = fechaActual.getDate() + '/' + (fechaActual.getMonth() + 1) + '/' + fechaActual.getFullYear();
    post.fecha = fechaFormateada;
    POSTS.push(post);
  }

  getAll(){
    return [...POSTS].sort(this.sortDate);
  }

  getByCategory(category: string){
    return POSTS.filter(post => post.categoria === category).sort(this.sortDate);
  }

  getCategories():string[]{
    return [...new Set(POSTS.map((post) => post.categoria))]
  }

  sortDate(a:Post, b:Post){
    const dateA = new Date(a.fecha.split('/').reverse().join('-'));
    const dateB = new Date(b.fecha.split('/').reverse().join('-'));
    return dateB.getTime() - dateA.getTime();
  }
}
