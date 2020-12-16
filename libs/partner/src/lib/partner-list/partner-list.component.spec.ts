import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerListComponent } from './partner-list.component';
import { PartnerCardComponent } from '../partner-card/partner-card.component';

import { MockComponent } from 'ng-mocks';
import { of } from 'rxjs';
import { mockPartner } from '@zenklub/data';
import { PartnerService } from '../partner.service';

const partnerServiceStub = {
  getPartners: () => of([mockPartner, mockPartner]),
};

describe('PartnerListComponent', () => {
  let component: PartnerListComponent;
  let fixture: ComponentFixture<PartnerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartnerListComponent, MockComponent(PartnerCardComponent)],
      providers: [{ provide: PartnerService, useValue: partnerServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
