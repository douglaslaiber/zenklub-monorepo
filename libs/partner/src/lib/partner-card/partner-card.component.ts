import { MobileService } from '@zenklub/utils';
import { Component, OnInit, Input } from '@angular/core';
import { Partner } from '@zenklub/data';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PartnerScheduleComponent } from '../partner-schedule/partner-schedule.component';
@Component({
  selector: 'zenklub-partner-card',
  templateUrl: './partner-card.component.html',
  styleUrls: ['./partner-card.component.scss'],
})
export class PartnerCardComponent implements OnInit {
  @Input()
  partner: Partner;
  constructor(
    public mobileService: MobileService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {}

  open() {
    const modalRef = this.modalService.open(PartnerScheduleComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.name = 'World';
  }
}
