import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { AuthUserService } from "./data.auth-user.service";

@Injectable({
  providedIn: "root"
})
export class BuzzesService {
  constructor(private http: HttpClient, private auth: AuthUserService) {}

  getBuzzes() {
    return this.http.get("/buzz/get").pipe(tap(data => console.log(data)));
  }

  getBuzz(buzzId) {
    return this.http.get("/buzz/own" + buzzId);
  }
}
