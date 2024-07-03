import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string = '';
  loading = false;

  constructor(private router: Router, private appService: AppService) {
    const username = localStorage.getItem('username');
    if (username) {
      this.username = username;
    }
  }

  signIn() {
    this.loading = true;
    this.appService
      .getUserByUsername(this.username)
      .pipe(first())
      .subscribe({
        next: (response) => {
          this.loading = false;
          console.log(response);
          // this.appService.user = {
          //   firstName: 'Test',
          //   lastName: response?.lastName,
          // };
          localStorage.setItem('firstName', response?.firstName);
          localStorage.setItem('lastName', response?.lastName);
          localStorage.setItem('username', this.username);
          this.router.navigate(['homepage']);
        },
        error: (error) => {
          this.loading = false;
          alert('Username not found');
        },
      });
  }
}
