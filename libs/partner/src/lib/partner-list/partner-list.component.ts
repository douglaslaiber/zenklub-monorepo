import { Component, OnInit } from '@angular/core';
import { PartnerService } from '../partner.service';
import { Partner } from '@zenklub/data';
import { Observable } from 'rxjs';
@Component({
  selector: 'zenklub-partner-list',
  templateUrl: './partner-list.component.html',
  styleUrls: ['./partner-list.component.scss'],
})
export class PartnerListComponent implements OnInit {
  partners: Observable<Partner[]>;
  constructor(private partnerService: PartnerService) {}

  ngOnInit(): void {
    this.partners = this.partnerService.getPartners();
  }
}
