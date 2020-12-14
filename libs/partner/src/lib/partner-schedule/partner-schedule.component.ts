import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
import { str_pad } from '@zenklub/utils';
import { PartnerService } from '../partner.service';

@Component({
  selector: 'zenklub-partner-schedule',
  templateUrl: './partner-schedule.component.html',
  styleUrls: ['./partner-schedule.component.scss'],
})
export class PartnerScheduleComponent implements OnInit {
  horasHoje: { hora: string; selected: boolean }[] = [];
  horas: { hora: string; selected: boolean }[] = [];
  dias: { day: string; weekday: string }[] = [];
  allDias: { day: string; weekday: string }[] = [];
  indiceDias = 1;
  hoje = DateTime.local().toFormat('dd/MM');
  horasMap = {};
  constructor(private partnerService: PartnerService) {}

  ngOnInit(): void {
    this.allDias = this.getDias();
    this.getHoursFromService();

    this.calcDias();
  }
  private getHoursFromService() {
    this.partnerService.getHours().subscribe((response) => {
      this.horas = response.map(this.mapHoraState());
      this.mapHorasMap();
    });
  }

  private mapHorasMap() {
    this.horasMap = this.allDias.reduce((acc, ite) => {
      if (DateTime.local().toFormat('dd/MM') === ite.day) {
        const horasHoje = this.getHoursToday().map(this.mapHoraState());
        acc[ite.day] = [...JSON.parse(JSON.stringify(horasHoje))];
      } else {
        acc[ite.day] = [...JSON.parse(JSON.stringify(this.horas))];
      }

      return acc;
    }, {});
  }

  private mapHoraState(): (
    value: any,
    index: number,
    array: any[]
  ) => { hora: any; selected: false } {
    return (hora) => {
      return {
        hora,
        selected: false,
      };
    };
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

  selecionar(hora) {
    hora.selected = !hora.selected;
  }
}
