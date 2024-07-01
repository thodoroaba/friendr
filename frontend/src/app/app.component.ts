import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isLoggedIn() {
    // return !!localStorage.getItem('userName');
    return document.location.pathname !== '/';
  }
}
