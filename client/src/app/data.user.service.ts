import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators'
import { User } from './user.model';

const url = 'http://localhost:3000/user'
let options = new HttpHeaders({
  'Content-Type': 'application/json'
})


@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) { }

  login(cred: string, password: string): Observable<any> {
    return this.http.post<any>(`${url}/login`, { userName: cred, password: password }).pipe(
      tap(_result => localStorage.setItem('sessionToken', _result.sessionToken)),
      catchError(this.handleError('postLogin', []))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  makeUser(user: User): Observable<any> {
    return this.http.post<User>(`${url}/signup`, user).pipe(
      tap((thing: User) => localStorage.setItem('sessionToken', thing.sessionToken)),
      catchError(this.handleError('makeUser', []))
    )
  }
}
