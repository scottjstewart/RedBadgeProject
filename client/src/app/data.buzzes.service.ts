import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BuzzesService {
  constructor(private http: HttpClient) {}

  getBuzzes() {
    return this.http.get("/buzz");
  }

  getBuzz(userId) {
    return this.http.get("/buzz/own" + userId);
  }
}
