import { Component, OnInit } from "@angular/core";
import { BuzzesService } from "../data.buzzes.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  users$: Object;

  constructor(private data: BuzzesService) {}

  ngOnInit() {
    this.data.getUsers().subscribe(data => (this.users$ = data));
  }
}
