import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'zenklub-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public scroll: any;

  @HostListener('window:scroll', ['$event'])
  onSroll(event) {
    this.scroll = window.scrollY;
    console.log(this.scroll)
  }
  constructor() {}

  ngOnInit(): void {
    this.scroll =   window.scrollY;
  }

}
