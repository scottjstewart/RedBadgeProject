import { Component, OnInit } from '@angular/core';
import { UserService } from '../data.user.service';
import { User } from '../user.model';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  log: any
  buildUser: FormGroup

  constructor(
    private user: UserService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildUser = this.fb.group({
      firstName: new FormControl,
      lastName: new FormControl,
      email: new FormControl,
      userName: new FormControl,
      password: new FormControl
    })
  }

  makeUser(): void {
    let user: User = this.buildUser.value
    console.log('makeUser init', user)
    this.user.makeUser(user).subscribe(
      res => this.log = res
    )
  }

}
