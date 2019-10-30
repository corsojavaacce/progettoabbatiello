import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliutenteComponent } from './dettagliutente.component';

describe('DettagliutenteComponent', () => {
  let component: DettagliutenteComponent;
  let fixture: ComponentFixture<DettagliutenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettagliutenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettagliutenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
