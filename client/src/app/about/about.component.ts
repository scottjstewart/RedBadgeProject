import { Component, OnInit } from "@angular/core";

import { MatDialog, MatDialogConfig } from "@angular/material";
import { CommentDialogComponent } from "./comment.dialog/comment.dialog.component";
import { AuthUserService } from "../data.auth-user.service";
import { BuzzesService } from "../data.buzzes.service";
import { LocationService } from "../data.location.service";
import { tap } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  picture = "./assetsabout/facebook_profile_image.png";
  buzzes = [
    {
      id: 37,
      title: "w00+",
      price: "$$",
      rating: 5,
      category: "Concert",
      location: "Close",
      upvotes: 320,
      downvotes: 10,
      description:
        "Spicy jalapeno filet mignon rump flank brisket, ball tip drumstick beef picanha t-bone. Filet mignon pig landjaeger, alcatra beef ribs rump ground round pork loin andouille. Chicken ham hock tail pork belly turkey, tongue bresaola filet mignon tenderloin burgdoggen rump. T-bone hamburger bresaola, cow brisket meatloaf sirloin short loin. Short loin bacon shoulder andouille bresaola meatball boudin pork pancetta alcatra corned beef ground round sirloin.\n\nBiltong beef flank tenderloin, rump porchetta chuck strip steak.Brisket short ribs ribeye, turkey swine pork chop meatball.Bresaola drumstick kevin salami tongue andouille.Frankfurter swine short ribs, bacon porchetta drumstick cow shank.Sirloin jowl tail capicola spare ribs salami biltong drumstick."
    },
    {
      id: 38,
      title: "w00+sauce",
      price: "$",
      rating: 4,
      category: "bar",
      location: "not as Close",
      upvotes: 180,
      downvotes: 15,
      description:
        "Spicy jalapeno filet mignon rump flank brisket, ball tip drumstick beef picanha t-bone. Filet mignon pig landjaeger, alcatra beef ribs rump ground round pork loin andouille. Chicken ham hock tail pork belly turkey, tongue bresaola filet mignon tenderloin burgdoggen rump. T-bone hamburger bresaola, cow brisket meatloaf sirloin short loin. Short loin bacon shoulder andouille bresaola meatball boudin pork pancetta alcatra corned beef ground round sirloin.\n\nBiltong beef flank tenderloin, rump porchetta chuck strip steak.Brisket short ribs ribeye, turkey swine pork chop meatball.Bresaola drumstick kevin salami tongue andouille.Frankfurter swine short ribs, bacon porchetta drumstick cow shank.Sirloin jowl tail capicola spare ribs salami biltong drumstick.",
      comments: [
        {
          commenter: 12345,
          comment: "comment comment comment rant rant rant"
        },
        {
          commenter: 12345,
          comment: "comment comment comment rant rant rant"
        }
      ]
    }
  ];
  buzzes$: any;
  loggedIn: boolean;
  loc: any;
  constructor(
    private dialog: MatDialog,
    private auth: AuthUserService,
    private geo: LocationService,
    private data: BuzzesService
  ) {}

  ngOnInit() {
    this.loggedIn = this.auth.loggedIn();
    this.loc = this.geo.getLocation();
    this.data.getBuzzes().subscribe(data => (this.buzzes$ = data));
  }

  openDialog(title: string, original: string) {
    const config = new MatDialogConfig();

    config.minHeight = "50vh";
    config.data = {
      title: title,
      original: original
    };

    // this.dialog.open(CommentDialogComponent, config)
    const dialogRef = this.dialog.open(CommentDialogComponent, config);

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        console.log("comment", data.comment);
      }
    });
  }
}
