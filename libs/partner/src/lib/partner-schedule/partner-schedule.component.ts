import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
import { str_pad } from '@zenklub/utils';

@Component({
  selector: 'zenklub-partner-schedule',
  templateUrl: './partner-schedule.component.html',
  styleUrls: ['./partner-schedule.component.scss']
})
export class PartnerScheduleComponent implements OnInit {
  horasHoje: string[] = [];
  horas: string[] = [];
  dias: { day: string; weekday: string }[] = [];
  allDias: { day: string; weekday: string }[] = [];
  indiceDias = 1;
  hoje = DateTime.local().toFormat('dd/MM');

  constructor() { }

  ngOnInit(): void {
    this.horasHoje = this.getHoursToday();
    this.horas = this.getHours();
    this.allDias = this.getDias();
    this.calcDias();
  }
  private calcDias() {
    const offset = (this.indiceDias - 1) * 4;
    this.dias = [...this.allDias.slice(offset, offset + 4)];
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
    const hours = [];
    for (let index = Number(start) + 1; index < 21; index++) {
      hours.push(`${str_pad(index)}:00`);
    }
    return hours;
  }
  getHours() {
    const dt = DateTime.local();
    const start = dt.toFormat('HH');
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
    return days;
  }
}
