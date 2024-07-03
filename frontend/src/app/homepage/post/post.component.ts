import { parseHostBindings } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { AppService, UpdatePostLikes } from '../../app.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  username = localStorage.getItem('username');
  userAvatarUrl =
    'https://aui.atlassian.com/aui/9.1/docs/images/avatar-person.svg';
  liked = false;
  loading = false;

  @Input() postInput: any;

  constructor(private appService: AppService) {}

  updateLikes() {
    if (this.loading) return;

    this.loading = true;
    const username = String(localStorage.getItem('username'));
    const updateLikesBody: UpdatePostLikes = {
      username: username,
    };
    const postId = this.postInput?.id;

    this.appService
      .updatePostLikes(updateLikesBody, postId)
      .pipe(first())
      .subscribe({
        next: (response) => {
          this.loading = false;
          console.log(response);
          if (response.likes.includes(username)) this.liked = true;
          else this.liked = false;
        },
        error: (error) => {
          this.loading = false;
        },
      });
  }
}
