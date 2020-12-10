import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
function str_pad(n) {
  return String('00' + n).slice(-2);
}

@Component({
  selector: 'zenklub-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'zenklub';
  horasHoje: string[] = [];
  horas: string[] = [];
  dias: { day: string; weekday: string }[] = [];
  allDias: { day: string; weekday: string }[] = [];
  indiceDias = 1;
  hoje=DateTime.local().toFormat('dd/MM')
  ngOnInit() {
    this.horasHoje = this.getHoursToday();
    this.horas = this.getHours();
    this.allDias = this.getDias();
    this.calcDias();
    console.log(this.dias);
  }
  private calcDias() {
    const offset = (this.indiceDias - 1) * 4;
    this.dias = [...this.allDias.slice(offset, offset + 4)];
    console.log(this.dias);
  }
  nextDias() {
    this.indiceDias = this.indiceDias + 1;
    this.calcDias();
  }
  prevDias() {
    this.indiceDias = this.indiceDias - 1;
    this.calcDias();
  }

  getHoursToday() {
    const dt = DateTime.local();
    const start = dt.toFormat('HH');
    console.log(dt);
    const hours = [];
    for (let index = Number(start) + 1; index < 21; index++) {
      hours.push(`${str_pad(index)}:00`);
    }
    return hours;
  }
  getHours() {
    const dt = DateTime.local();
    const start = dt.toFormat('HH');
    console.log(dt);
    const hours = [];
    for (let index = 8 + 1; index < 21; index++) {
      hours.push(`${str_pad(index)}:00`);
    }
    return hours;
  }
  getDias() {
    let curDate = DateTime.local();
    const targetDate = DateTime.local().plus({ month: 2 });
    const weekdays = [1, 2, 3, 4, 5];

    const days = [];

    while (!curDate.hasSame(targetDate, 'day')) {

      if (weekdays.includes(curDate.weekday)) {
        const day = curDate.setLocale('pt-BR').toFormat('EEEE');
        const weekday = day.substring(0, day.length - 6);
        days.push({ day: curDate.toFormat('dd/MM'), weekday });
      }
      curDate = curDate.plus({ day: 1 });
    }
    console.log(days);
    return days;
  }
}
