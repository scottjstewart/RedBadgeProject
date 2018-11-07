import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef, MatDialogConfig } from "@angular/material";
import { CommentDialogComponent } from "../about/comment.dialog/comment.dialog.component";
import { BuzzesService } from "../data.buzzes.service";
import { DataCommentService } from "../data.comment.service";
import { AuthUserService } from "../data.auth-user.service";

@Component({
  selector: "app-buzz-detail",
  templateUrl: "./buzz-detail.component.html",
  styleUrls: ["./buzz-detail.component.css"]
})
export class BuzzDetailComponent implements OnInit {
  // buzz = {
  //   title: "WOrdsWordsWOrds",
  //   user: "fluffyBunny",
  //   location: "far",
  //   price: "expensive",
  //   funFactor: 5,
  //   details:
  //     "Jump five feet high and sideways when a shadow moves sit on the laptop, thinking longingly about tuna brine. Toy mouse squeak roll over. Scratch the postman wake up lick paw wake up owner meow meow make plans to dominate world and then take a nap, or see owner, run in terror cough furball, and toilet paper attack claws fluff everywhere meow miao french ciao litterbox or meow all night. Loves cheeseburgers sit on human they not getting up ever yet hack bird bird bird bird bird bird human why take bird out i could have eaten that immediately regret falling into bathtub for destroy couch. Leave fur on owners clothes attack the child, for roll on the floor purring your whiskers off, but damn that dog chase mice. Need to chase tail mew purrr purr littel cat, little cat purr purr, for sit in box, bite off human's toes yet chew foot, for have secret plans.Do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter i live in luxury cat life eat an easter feather as if it were a bird then burp victoriously, but tender and sometimes switches in french and say 'miaou' just because well why not.Eat an easter feather as if it were a bird then burp victoriously, but tender love blinks and purr purr purr purr yawn fall over dead(not really but gets sypathy) and sniff catnip and act crazy chew iPad power cord.Attack the child.Pet my belly, you know you want to; seize the hand and shred it!",
  //   upvotes: 132,
  //   comments: [
  //     {
  //       user: "knavishRogue",
  //       text:
  //         "Knavish rogue face broom got milk facial accessory hairy kid at school grooming, colonel mustard mouth coiffure testosterone trophy got milk luxurious facial accessory dickie davies face broom hairy kid at school knavish rogue professor plum old man in pub grooming spaghetti western, facial accessory kris kristofferson. charlie chaplin glorious facial hair spaghetti western knavish rogue luxurious grooming dickie davies leader of men godlike mouth coiffure colonel mustard hairy kid at school got milk old man in pub testosterone trophy professor plum face broom?",
  //       createdAt: "kljhsdklgauifgbloia"
  //     },
  //     {
  //       user: "bobTheBuilder",
  //       text:
  //         "El snort professor plum nefarious. Mouthbrow terry thomas Fallen eyebrow ron burgundy dodgy uncle clive Refined gentlemen louis xiii, Refined gentlemen ron burgundy mouthbrow French café patron louis xiii bruce forsyth trimmed Fallen eyebrow mexican des lynam terry thomas landed gentry dodgy uncle clive arcu, arcu dodgy uncle clive terry thomas goose face mop louis xiii bruce forsyth Fallen eyebrow doctor strange horseshoe rock n roll star mexican landed gentry ron burgundy Refined gentlemen trimmed des lynam dick van dyke mouthbrow toothbrush French café patron.",
  //       createdAt: "al;ghbkhfbiu;ahb"
  //     }
  //   ]
  // };
  buzzes$: any;
  comments: any;
  loggedIn: boolean;

  constructor(
    private dialog: MatDialog,
    private buzz: BuzzesService,
    private data: DataCommentService,
    private auth: AuthUserService
  ) {}

  ngOnInit() {
    this.loggedIn = this.auth.loggedIn();
    this.buzz.getBuzzes().subscribe(data => (this.buzzes$ = data));
    this.data.getComments().subscribe(data => (this.comments = data));
  }

  openDialog(title, original) {
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
