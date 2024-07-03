import { parseHostBindings } from '@angular/compiler';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  username = localStorage.getItem('username');
  userAvatarUrl =
    'https://aui.atlassian.com/aui/9.1/docs/images/avatar-person.svg';

  constructor() {}

  @Input() postInput: any;
}
