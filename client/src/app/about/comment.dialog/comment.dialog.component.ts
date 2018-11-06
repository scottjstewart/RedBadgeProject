import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

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
    this.ref.close(this.form.value)
  }

  close() {
    this.ref.close()
  }

}
