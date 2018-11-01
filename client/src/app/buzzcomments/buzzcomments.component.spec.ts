import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzzcommentsComponent } from './buzzcomments.component';

describe('BuzzcommentsComponent', () => {
  let component: BuzzcommentsComponent;
  let fixture: ComponentFixture<BuzzcommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuzzcommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuzzcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
