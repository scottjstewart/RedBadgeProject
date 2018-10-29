import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

const authURL: string = ''

const httpAuthOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: localStorage.getItem('sessionToken')
  }),
  body: {
    username: '',
    password: ''
  }
}


@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      return of(result as T)
    }
  }

  updateUser(fn: string, ln: string, username: string, email: string, password: string): Observable<any> {
    let token = localStorage.getItem('sessionToken')
    return this.http.put(authURL, httpAuthOptions).pipe(
      tap(),
      catchError(this.handleError('updateUser', []))
    )
  }

  deleteUser(username: string, password: string): Observable<any> {
    httpAuthOptions.body.username = username,
      httpAuthOptions.body.password = password

    return this.http.delete(authURL, httpAuthOptions).pipe(
      tap(),
      catchError(this.handleError('deletUser', []))
    )
  }

}
