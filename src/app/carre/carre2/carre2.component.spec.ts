import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carre2Component } from './carre2.component';

describe('Carre2Component', () => {
  let component: Carre2Component;
  let fixture: ComponentFixture<Carre2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carre2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carre2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
