import { Component, OnInit } from "@angular/core";
import { AuthUserService } from "../../data.auth-user.service";
import { User } from "../../user.model";
import { BuzzesService } from "../../data.buzzes.service";
import { DataCommentService } from "../../data.comment.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"]
})
export class AccountComponent implements OnInit {

  users$: User
  username: string
  password: string
  comment: any;
  buzzes: any;
  commentId: any;


  constructor(
    private auth: AuthUserService,
    private data: DataCommentService,
    private buzz: BuzzesService
  ) {}

  ngOnInit() {
    this.auth.getUser().subscribe(auth => {
      this.users$ = auth;
      console.log("here is the data", this.users$);
    });
    this.buzz.getBuzzes().subscribe(buzz => {
      this.buzzes = buzz;
    });
    // this.data.getOwnComment(this.users$.comment).subscribe(data => {
    //   this.comment = data;
    // });
  }
  delete(): void {
    this.auth.deleteUser(this.username, this.password).subscribe();
  }

}
