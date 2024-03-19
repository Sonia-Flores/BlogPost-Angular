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
    return [...POSTS].sort((a, b) => {
      const dateA = new Date(a.fecha.split('/').reverse().join('-'));
      const dateB = new Date(b.fecha.split('/').reverse().join('-'));
      return dateB.getTime() - dateA.getTime();
    });
  }

  getByCategory(category: string){
    return POSTS.filter(post => post.categoria === category)
  }
}
