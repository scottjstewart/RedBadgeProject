import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comment.DialogComponent } from './comment.dialog.component';

describe('Comment.DialogComponent', () => {
  let component: Comment.DialogComponent;
  let fixture: ComponentFixture<Comment.DialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comment.DialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comment.DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
