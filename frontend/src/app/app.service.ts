import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  firstName: string;
  lastName: string;
  username: string;
  id: number;
}
export interface Post {
  author: string;
  title: string;
  description: string;
}
export interface UpdatePostLikes {
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}
  user!: User;

  getUserByUsername(username: string): Observable<any> {
    return this.http.get(`http://localhost:3000/users/${username}`);
  }
  getPosts(): Observable<any> {
    return this.http.get(`http://localhost:3000/posts`);
  }

  createUser(userBody: User): Observable<any> {
    return this.http.post(`http://localhost:3000/users/`, userBody);
  }

  createPost(postBody: Post): Observable<any> {
    return this.http.post(`http://localhost:3000/posts/`, postBody);
  }

  updatePostLikes(
    updatePostLikesBody: UpdatePostLikes,
    postId: string
  ): Observable<any> {
    return this.http.patch(
      `http://localhost:3000/posts/${postId}/likes`,
      updatePostLikesBody
    );
  }
}
