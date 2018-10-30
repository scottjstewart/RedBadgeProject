import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators'

const url = '/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  login(cred: string, password: string): Observable<any> {
    return this.http.post(`${url}/login`, { cred, password }).pipe(
      // tap(result => localStorage.setItem('sessionToken', result.sessionToken)),
      catchError(this.handleError('postLogin', []))
    )
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      return of(result as T)
    }
  }

  makeUser(fn: string, ln: string, username: string, email: string, password: string): Observable<object> {
    return this.http.post(`${url}/signup`, { fn, ln, username, email, password }).pipe(
      tap(),
      catchError(this.handleError('makeUser', []))
    )
  }

}
