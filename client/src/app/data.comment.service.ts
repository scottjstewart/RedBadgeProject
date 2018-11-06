import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { AuthUserService } from "./data.auth-user.service";

@Injectable({
  providedIn: "root"
})
export class DataCommentService {
  newComment: Object;

  constructor(private http: HttpClient, private auth: AuthUserService) {}

  getComments() {
    return this.http
      .get("http://localhost:3000/comment/get")
      .pipe(tap(data => console.log(data)));
  }

  getOwnComment(userId, commentId) {
    return this.http.get("http://localhost:3000/comment/own" + commentId);
  }

  createComment(comment) {
    return this.http.post("http://localhost:3000/comment/create", comment);
  }

  updateComment(commentId, newComment) {
    return this.http.put(
      "http://localhost:3000/comment/update" + commentId,
      newComment
    );
  }

  deleteComment(commentId) {
    return this.http.delete("http://localhost:3000/comment/delete" + commentId);
  }

  submit() {
    return console.log("clicked");
  }
}
