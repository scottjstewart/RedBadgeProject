import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { CommentDialogComponent } from '../about/comment.dialog/comment.dialog.component';
import { BuzzesService } from '../data.buzzes.service';
import { ActivatedRoute } from '@angular/router';
import { Buzz } from '../buzz.model';

@Component({
  selector: 'app-buzz-detail',
  templateUrl: './buzz-detail.component.html',
  styleUrls: ['./buzz-detail.component.css']
})
export class BuzzDetailComponent implements OnInit {

  buzz: any

  constructor(
    private dialog: MatDialog,
    private buzzSvc: BuzzesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id')
    this.buzzSvc.getBuzzById(id).subscribe(
      res => {
        this.buzz = res
        console.log(this.buzz)
      }
    )
  }

  openDialog(title, original) {
    const config = new MatDialogConfig();

    config.minHeight = "50vh";
    config.data = {
      id: this.buzz.id,
      title: title,
      original: original
    };

    // this.dialog.open(CommentDialogComponent, config)
    const dialogRef = this.dialog.open(CommentDialogComponent, config);

    dialogRef.afterClosed().subscribe(data => {
      if (data) {

      }
    });

  }

}
