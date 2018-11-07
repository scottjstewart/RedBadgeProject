import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { AuthUserService } from "./data.auth-user.service";
import { Buzz } from "./buzz.model";


const url = "http://localhost:3000/buzz";

@Injectable({
  providedIn: "root"
})
export class BuzzesService {
  constructor(private http: HttpClient, private auth: AuthUserService) {}

  getBuzzes() {
    return this.http
      .get("/buzz/get")
      .pipe(tap(data => console.log(data)));
  }

  getBuzz(buzzId) {
    return this.http.get("/buzz/own" + buzzId);
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T)
    }
  }

  makeBuzz(buzz: Buzz): Observable<any> {
    return this.http.post<Buzz>(`/buzz/makeBuzz`, buzz).pipe(
      catchError(this.handleError("makeBuzz", []))
  )
}

  deleteBuzz(buzz : Buzz | number): Observable<any> {
    const id = typeof buzz === 'number' ? buzz : buzz.id
    return this.http.delete<Buzz>(`/buzz/delete/${id}`).pipe(
      catchError(this.handleError("deleteBuzz", []))
    )
  }

  updateBuzz(buzz : Buzz | number): Observable<any> {
    const id = typeof buzz === 'number' ? buzz : buzz.id
    const options = {
      headers: new HttpHeaders ({
        'Content-Type': 'applicatoin/json'
      })
    }
    return this.http.put(`buzz/update/${id}`, options).pipe(
      catchError(this.handleError("updateBuzz", []))
    )
  }
    
}
