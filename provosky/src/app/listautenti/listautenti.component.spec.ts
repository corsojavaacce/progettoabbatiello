import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LISTAUTENTIComponent } from './listautenti.component';

describe('LISTAUTENTIComponent', () => {
  let component: LISTAUTENTIComponent;
  let fixture: ComponentFixture<LISTAUTENTIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LISTAUTENTIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LISTAUTENTIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
