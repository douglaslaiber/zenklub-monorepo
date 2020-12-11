import { Component, OnInit } from '@angular/core';
import { PartnerService } from '../partner.service';
import { Partner } from '@zenklub/data';
@Component({
  selector: 'zenklub-partner-list',
  templateUrl: './partner-list.component.html',
  styleUrls: ['./partner-list.component.scss'],
})
export class PartnerListComponent implements OnInit {
  partners:Partner[]=[]
  constructor(private partnerService: PartnerService) {}

  ngOnInit(): void {
    this.partnerService.getPartners().subscribe((response) => {
      console.log(response)
      this.partners=response;
    });
  }
}
