import { Component, HostListener, OnInit ,Input} from '@angular/core';
import { Partner } from '@zenklub/data';
import { MobileService } from '@zenklub/utils';
@Component({
  selector: 'zenklub-partner-info',
  templateUrl: './partner-info.component.html',
  styleUrls: ['./partner-info.component.scss'],
})
export class PartnerInfoComponent implements OnInit {

  @Input()
  partner:Partner;

  constructor(public mobileService:MobileService) {}

  ngOnInit(): void {
  }
}
