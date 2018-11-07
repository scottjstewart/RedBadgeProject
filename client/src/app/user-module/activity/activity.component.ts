import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/data.auth-user.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  loggedIn: boolean;
  buzzes: any;
  comments: any;
  currentUser;
  constructor(
    private auth: AuthUserService
  ) { }

  ngOnInit() {
    this.loggedIn = this.auth.loggedIn()
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
    console.log(this.currentUser.firstName)
  }

}
