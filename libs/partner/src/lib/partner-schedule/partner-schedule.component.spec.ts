import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerScheduleComponent } from './partner-schedule.component';

describe('PartnerScheduleComponent', () => {
  let component: PartnerScheduleComponent;
  let fixture: ComponentFixture<PartnerScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
