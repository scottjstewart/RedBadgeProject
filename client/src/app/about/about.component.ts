import { Component, OnInit } from "@angular/core";
import { BuzzesService } from "../data.buzzes.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  buzzes$: Object;

  constructor(private data: BuzzesService) {}

  ngOnInit() {
    this.data.getBuzzes().subscribe(data => (this.buzzes$ = data));
  }
}
