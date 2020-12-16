/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PartnerCardComponent } from './partner-card.component';
import { PartnerScheduleComponent } from '../partner-schedule/partner-schedule.component';
import { MockComponent } from 'ng-mocks';
import { PartnerInfoComponent } from '../partner-info/partner-info.component';
import { MobileService } from '@zenklub/utils';
import { of } from 'rxjs';
const mobileServiceStub = {
  isMobile$: of(false),
  isNotMobile$: of(true),
};
describe('PartnerCardComponent', () => {
  let component: PartnerCardComponent;
  let fixture: ComponentFixture<PartnerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PartnerCardComponent,
        MockComponent(PartnerScheduleComponent),
        MockComponent(PartnerInfoComponent),
      ],
      providers: [{ provide: MobileService, useValue: mobileServiceStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
