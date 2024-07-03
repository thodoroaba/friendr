import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'createPost',
    component: CreatePostComponent,
  },
];

@NgModule({
  declarations: [HomepageComponent, CreatePostComponent, PostComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class HomepageModule {}
