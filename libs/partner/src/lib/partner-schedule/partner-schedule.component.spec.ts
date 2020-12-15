import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerScheduleComponent } from './partner-schedule.component';
import { PartnerService } from '../partner.service';
import { of } from 'rxjs';
import { Settings, DateTime } from 'luxon';

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
    Settings.now = () => new Date('2020-12-08T10:00:00').valueOf();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('getHours should be called', () => {
    const partner = fixture.debugElement.injector.get(PartnerService);
    const spy = jest.spyOn(partner, 'getHours');
    component.ngOnInit();

    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('horas should be correct', () => {
    Settings.now = () => new Date('2020-12-07T09:10:00').valueOf();

    component.ngOnInit();

    expect(component.dias[0]).toEqual({ day: '07/12', weekday: 'segunda' });
    expect(component.dias[1]).toEqual({ day: '08/12', weekday: 'terça' });
    expect(component.dias[2]).toEqual({ day: '09/12', weekday: 'quarta' });
    expect(component.dias[3]).toEqual({ day: '10/12', weekday: 'quinta' });
  });
  it('horas should be correct', () => {
    Settings.now = () => new Date('2020-12-07T09:10:00').valueOf();

    component.ngOnInit();

    expect(component.horas[0]).toEqual({ hora: '09:00', selected: false });
    expect(component.horas[1]).toEqual({ hora: '10:00', selected: false });
    expect(component.horas[2]).toEqual({ hora: '11:00', selected: false });
  });
  it('horasMap should be correct', () => {
    Settings.now = () => new Date('2020-12-07T09:10:00').valueOf();
    component.ngOnInit();

    expect(component.horasMap['08/12']).toEqual([
      { hora: '09:00', selected: false },
      { hora: '10:00', selected: false },
      { hora: '11:00', selected: false },
    ]);
  });
  it('horasMap should be correct', () => {
    Settings.now = () => new Date('2020-12-07T09:10:00').valueOf();
    component.ngOnInit();

    expect(component.horasMap['07/12']).toEqual([
      { hora: '10:00', selected: false },
      { hora: '11:00', selected: false },
    ]);
  });
});
