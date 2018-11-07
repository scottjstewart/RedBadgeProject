import { Component, OnInit } from "@angular/core";
import { AuthUserService } from "../../data.auth-user.service";
import { User } from "../../user.model";
import { BuzzesService } from "../../data.buzzes.service";
import { DataCommentService } from "../../data.comment.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"]
})
export class AccountComponent implements OnInit {
  users$: User;
  username: string;
  password: string;
  comment: any;
  buzzes: any;
  commentId: any;
  buzz: any;

  constructor(
    private auth: AuthUserService,
    private data: DataCommentService,
    private buzzSvc: BuzzesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.auth.getUser().subscribe(auth => {
      this.users$ = auth;
      console.log("here is the data", this.users$);
    });
    // let id = this.route.snapshot.paramMap.get("id");
    // this.buzzSvc.getBuzzById(id).subscribe(res => {
    //   this.buzz = res;
    //   console.log(this.buzz);
    // });
    // this.buzz.getBuzz(buzzerId).subscribe(buzz => {
    //   this.buzzes = buzz;
    // });
    // this.data.getOwnComment(this.users$.comment).subscribe(data => {
    //   this.comment = data;
    // });
  }
  delete(): void {
    this.auth.deleteUser(this.username, this.password).subscribe();
  }
}
