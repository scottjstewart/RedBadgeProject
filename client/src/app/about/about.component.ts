import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  picture = "./assetsabout/facebook_profile_image.png";
  constructor() {}

  ngOnInit() {}
}
