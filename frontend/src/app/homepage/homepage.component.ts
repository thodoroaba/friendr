import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  posts: any = [];
  constructor(private appService: AppService) {
    this.appService
      .getPosts()
      .pipe(first())
      .subscribe({
        next: (response) => {
          console.log(response);
          this.posts = response;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
  getUser() {}

  getPosts() {}
}
