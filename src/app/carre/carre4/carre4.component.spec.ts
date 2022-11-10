import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carre4Component } from './carre4.component';

describe('Carre4Component', () => {
  let component: Carre4Component;
  let fixture: ComponentFixture<Carre4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carre4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carre4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
