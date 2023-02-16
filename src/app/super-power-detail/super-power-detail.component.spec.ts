import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperPowerDetailComponent } from './super-power-detail.component';

describe('SuperPowerDetailComponent', () => {
  let component: SuperPowerDetailComponent;
  let fixture: ComponentFixture<SuperPowerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperPowerDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperPowerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
