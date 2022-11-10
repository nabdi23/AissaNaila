import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carre3Component } from './carre3.component';

describe('Carre3Component', () => {
  let component: Carre3Component;
  let fixture: ComponentFixture<Carre3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carre3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carre3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
