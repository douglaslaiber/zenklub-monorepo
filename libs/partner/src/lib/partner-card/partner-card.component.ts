import { Component, OnInit, Input } from '@angular/core';
import { Partner } from '@zenklub/data';
@Component({
  selector: 'zenklub-partner-card',
  templateUrl: './partner-card.component.html',
  styleUrls: ['./partner-card.component.scss'],
})
export class PartnerCardComponent implements OnInit {
  @Input()
  partner: Partner;
  constructor() {}

  ngOnInit() {}
}
