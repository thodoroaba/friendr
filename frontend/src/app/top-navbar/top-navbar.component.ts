import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.scss',
})
export class TopNavbarComponent {
  username = localStorage.getItem('firstName');
  userAvatarUrl =
    'https://aui.atlassian.com/aui/9.1/docs/images/avatar-person.svg';

  constructor(private appService: AppService) {
    // this.username = this.appService.user?.firstName;
  }
}
