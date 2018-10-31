import { Component, OnInit } from '@angular/core';
import { UserService } from '../data.user.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  log: any
  credentials: FormGroup

  constructor(private user: UserService, private fb: FormBuilder) { }

  ngOnInit() {
    this.credentials = this.fb.group({
      userName: new FormControl,
      password: new FormControl
    })
  }

  login(): void {
    let cred = this.credentials.controls.userName.value
    let password = this.credentials.controls.password.value

    console.log('login init with', cred, password)
    this.user.login(cred, password).subscribe(
      res => this.log = res
    )
  }

}
