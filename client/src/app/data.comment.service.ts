import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http: HttpClient
  ) { }

  addComment(comment: string, id: string | number): Observable<any> {
    return this.http.post(`/comment/add/${id}`, { text: comment }).pipe(
      tap(ret => console.log(ret))
    )
  }
}
