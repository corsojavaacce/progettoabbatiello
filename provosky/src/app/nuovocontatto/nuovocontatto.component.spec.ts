import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovocontattoComponent } from './nuovocontatto.component';

describe('NuovocontattoComponent', () => {
  let component: NuovocontattoComponent;
  let fixture: ComponentFixture<NuovocontattoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuovocontattoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovocontattoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
