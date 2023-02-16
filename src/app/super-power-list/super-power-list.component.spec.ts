import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperPowerListComponent } from './super-power-list.component';

describe('SuperPowerListComponent', () => {
  let component: SuperPowerListComponent;
  let fixture: ComponentFixture<SuperPowerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperPowerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperPowerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
