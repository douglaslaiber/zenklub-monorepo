import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerScheduleComponent } from './partner-schedule.component';
import { PartnerService } from '../partner.service';
import { of } from 'rxjs';
const partnerServiceStub = {
  getHours: () => of(['09:00', '10:00', '11:00']),
};

describe('PartnerScheduleComponent', () => {
  let component: PartnerScheduleComponent;
  let fixture: ComponentFixture<PartnerScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartnerScheduleComponent],
      providers: [{ provide: PartnerService, useValue: partnerServiceStub }],
    }).compileComponents();
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
