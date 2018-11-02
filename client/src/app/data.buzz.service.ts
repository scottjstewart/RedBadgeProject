import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthUserService } from './data.auth-user.service';

@Injectable({
  providedIn: 'root'
})
export class BuzzService {

  constructor(
    private http: HttpClient,
    private auth: AuthUserService,
  ) { }

  makeBuzz() {

  }

  updateBuzz() {

  }

  deletBuzz() {

  }

  getBuzz() {

  }

  getBuzzes() {

  }

  upvoteBuzz() {

  }

  dnvoteBuzz() {

  }

  commentBuzz() {

  }

  uncommentBuzz() {

  }

}
