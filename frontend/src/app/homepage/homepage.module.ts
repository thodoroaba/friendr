import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { RouterModule, Routes } from '@angular/router';

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
  declarations: [HomepageComponent, CreatePostComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HomepageModule {}
