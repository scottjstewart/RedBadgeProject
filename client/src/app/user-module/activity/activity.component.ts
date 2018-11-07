import { Component, OnInit } from "@angular/core";
import { AuthUserService } from "src/app/data.auth-user.service";
import { User } from "../../user.model";
import { DataCommentService } from "../../data.comment.service";

@Component({
  selector: "app-activity",
  templateUrl: "./activity.component.html",
  styleUrls: ["./activity.component.css"]
})
export class ActivityComponent implements OnInit {
  users$: User;
  loggedIn: boolean;
  buzzes: any;
  comments: any;
  constructor(
    private auth: AuthUserService,
    private data: DataCommentService
  ) {}

  ngOnInit() {
    this.loggedIn = this.auth.loggedIn()
    this.auth.getUser().subscribe(auth => {
      this.users$ = auth;
      console.log(this.users$.firstName);
    });
  }
}
