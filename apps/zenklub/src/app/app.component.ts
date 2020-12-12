import { Component, HostListener, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { MobileService } from '@zenklub/utils';

@Component({
  selector: 'zenklub-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private mobileService: MobileService) {}

  ngOnInit(): void {
    this.setIsMobile();
    this.checkIsMobile();
  }

  private checkIsMobile() {
    fromEvent(window, 'resize')
      .pipe(debounceTime(300))
      .subscribe((event) => {
        this.setIsMobile();
      });
  }

  private setIsMobile() {
    this.mobileService.setIsMobile(window.innerWidth);
  }
}
