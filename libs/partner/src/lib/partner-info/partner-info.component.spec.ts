import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerInfoComponent } from './partner-info.component';
import { SharedUiModule } from '@zenklub/shared-ui';
import { MobileService } from '@zenklub/utils';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Partner, mockPartner } from '@zenklub/data';
import { of } from 'rxjs';
const mobileServiceStub = {
  isMobile$: of(false),
  isNotMobile$: of(true),
};
describe('PartnerInfoComponent', () => {
  let component: PartnerInfoComponent;
  let fixture: ComponentFixture<PartnerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartnerInfoComponent],
      providers: [{ provide: MobileService, useValue: mobileServiceStub }],
      imports: [SharedUiModule, NgbModule],
    }).compileComponents();
  });

  const partner = mockPartner;
  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerInfoComponent);
    component = fixture.componentInstance;
    component.partner = partner;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
