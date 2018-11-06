import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { BuzzesService } from 'src/app/data.buzzes.service';

@Component({
  selector: 'app-comment.dialog',
  templateUrl: './comment.dialog.component.html',
  styleUrls: ['./comment.dialog.component.css']
})
export class CommentDialogComponent implements OnInit {
  id: number
  title: string
  form: FormGroup
  original: string

  constructor(
    private fb: FormBuilder,
    private ref: MatDialogRef<CommentDialogComponent>,
    private Buzz: BuzzesService,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.title = data.title
    this.original = data.original
  }

  ngOnInit() {
    this.form = this.fb.group({
      comment: new FormControl
    })
  }

  submit(comment: string) {
    console.log('dialog commnet', comment)
    let buzz = this.form.value
    console.log(buzz)
    this.Buzz.makeBuzz(buzz).subscribe(

    )
    this.ref.close(this.form.value)
  }

  close() {
    this.ref.close()
  }

}
