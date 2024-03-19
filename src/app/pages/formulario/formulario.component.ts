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
  arrPosts: Post[] = this.postsServices.getAll();
  router = inject(Router);

  onSubmit() {
    this.postsServices.createPost(this.formulario.value);
    this.router.navigateByUrl('/posts')
  }

 

}
