import { Component } from '@angular/core';
import { AppService, Post } from '../../app.service';
import { first } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss',
})
export class CreatePostComponent {
  loading = false;
  author = localStorage.getItem('username') || 'Anonymous';
  title = '';
  description = '';

  constructor(private router: Router, private appService: AppService) {}

  createPost() {
    if (this.loading) return;

    this.loading = true;
    const postBody: Post = {
      author: this.author,
      title: this.title,
      description: this.description,
    };

    this.appService
      .createPost(postBody)
      .pipe(first())
      .subscribe({
        next: (response) => {
          this.loading = false;
          console.log(response);
          this.router.navigate(['homepage']);
        },
        error: (error) => {
          this.loading = false;
          console.log('Error when creating a post:', error);
          alert('Error when creating a post: ' + error?.message);
        },
      });
  }
}
