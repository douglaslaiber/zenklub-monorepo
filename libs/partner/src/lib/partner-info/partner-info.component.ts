import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'zenklub-partner-info',
  templateUrl: './partner-info.component.html',
  styleUrls: ['./partner-info.component.scss'],
})
export class PartnerInfoComponent implements OnInit {
  desc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id tincidunt ex. Nam odio dolor, luctus cursus
dolor id, bibendum congue arcu. Fusce consequat tincidunt auctor. Nullam tincidunt bibendum nisl, non
hendrerit eros ultricies ac. Duis ac purus diam. Phasellus in tempus elit, at tempor nibh. Fusce eget dolor
quis metus bibendum vehicula vitae quis dolor. Aliquam efficitur elit felis, sed molestie eros hendrerit id.

Curabitur placerat mi quis sem blandit rhoncus. Vivamus eget mi nec tortor dapibus malesuada quis sed sem.
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vestibulum, dui
scelerisque faucibus tristique, ex enim congue sem, vestibulum suscipit nisi lacus quis arcu. Sed non
imperdiet neque, quis bibendum tortor.`;

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
