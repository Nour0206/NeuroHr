
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private apiUrl = 'http://localhost:3000/users'; // JSON Server API URL
  constructor(private http: HttpClient) { }


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  
  
}
