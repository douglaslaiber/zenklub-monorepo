import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MobileService {
  private isMobile: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isMobile$ = this.isMobile.asObservable();
  isNotMobile$ = this.isMobile.asObservable().pipe(
    map((val) => {
      return !val;
    })
  );
  private isSmall: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isSmall$ = this.isMobile.asObservable();
  isNotSmall$ = this.isMobile.asObservable().pipe(
    map((val) => {
      return !val;
    })
  );

  constructor() {}

  setIsMobile(width: number) {
    const bol = width < 768;
    this.isMobile.next(bol);
    const small = width < 576;
    this.isSmall.next(small);
  }
}
