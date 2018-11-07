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
    return this.http.get("/comment/get").pipe(tap(data => console.log(data)));
  }

  getOwnComment(commentId) {
    return this.http.get("/comment/own" + commentId);
  }

  createComment(comment) {
    return this.http.post("/comment/create", comment);
  }

  updateComment(commentId, newComment) {
    return this.http.put("/comment/update" + commentId, newComment);
  }

  deleteComment(commentId) {
    return this.http.delete("/comment/delete" + commentId);
  }

  firstClick() {
    return console.log("clicked");
  }
}
