import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  formulario: FormGroup = new FormGroup({
    titulo: new FormControl(null, Validators.required), // Agrega validadores a los campos
    texto: new FormControl(null, Validators.required),
    autor: new FormControl(null, Validators.required),
    imagen: new FormControl(null, Validators.required),
    categoria: new FormControl('Moda', Validators.required)
  });

  postsServices = inject(PostsService);
  router = inject(Router);
  
  arrPosts: Post[] = this.postsServices.getAll();
  categorias: string[]= this.postsServices.getCategories();
  


  onSubmit() {
    this.postsServices.createPost(this.formulario.value);
    this.router.navigateByUrl('/posts')
  }

  checkError(controlName: string, errorName: string) {
    return this.formulario.get(controlName)!.hasError(errorName) &&
      this.formulario.get(controlName)!.touched;
  }

 

}
