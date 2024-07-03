import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  firstName: string;
  lastName: string;
  username?: string;
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
  
}
