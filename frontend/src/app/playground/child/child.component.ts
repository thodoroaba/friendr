import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent implements OnInit {
  // Input communication (parent to child)
  @Input() postInput: any;

  likePost() {
    console.log(`You liked post ${this.postInput.id}`);
  }

  ngOnInit() {
    console.log(this.postInput);
  }
}
