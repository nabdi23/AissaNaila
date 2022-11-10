import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carre1Component } from './carre1.component';

describe('Carre1Component', () => {
  let component: Carre1Component;
  let fixture: ComponentFixture<Carre1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carre1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carre1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
