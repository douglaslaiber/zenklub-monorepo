import { Component, HostListener, OnInit ,Input} from '@angular/core';
import { Partner } from '@zenklub/data';

@Component({
  selector: 'zenklub-partner-info',
  templateUrl: './partner-info.component.html',
  styleUrls: ['./partner-info.component.scss'],
})
export class PartnerInfoComponent implements OnInit {

  @Input()
  partner:Partner;

  public innerWidth: any;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }
  constructor() {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }
}
