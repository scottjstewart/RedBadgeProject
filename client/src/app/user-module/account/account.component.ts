import { Component, OnInit } from "@angular/core";
import { AuthUserService } from "../../data.auth-user.service";
import { User } from "../../user.model";
import { BuzzesService } from "../../data.buzzes.service";
import { DataCommentService } from "../../data.comment.service";
import { MatDialogConfig, MatDialog } from '@angular/material';
import { UpdateUserComponent } from "./update-user/update-user.component";

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
    private buzz: BuzzesService,
    private dialog: MatDialog

  ) {}

  ngOnInit() {
    this.auth.getUser().subscribe(auth => {
      this.users$ = auth;
      // console.log("here is the data", this.users$);
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

  updateUser() {
    const config = new MatDialogConfig;

    config.minHeight = "50vh";

    // this.dialog.open(CommentDialogComponent, config)
    const dialogRef = this.dialog.open(UpdateUserComponent, config);

    dialogRef.afterClosed().subscribe(data => {
      console.log(data)
    });
  }

}
