import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../../data.auth-user.service';
import { User } from '../../user.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  users$: User

  constructor(
    private auth: AuthUserService
  ) { }

  ngOnInit() {
    this.auth.getUser().subscribe(auth => {
      this.users$ = auth
      console.log("here is the data", this.users$)
    })
  }

}
