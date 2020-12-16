import { str_pad } from '@zenklub/utils';
import { Injectable } from '@nestjs/common';
import { DateTime } from 'luxon';
import { Partner } from '@zenklub/data';

import * as faker from 'faker';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to api!' };
  }

  getHours() {
    const dt = DateTime.local();
    const hours = [];
    for (let index = 8 + 1; index < 21; index++) {
      hours.push(`${str_pad(index)}:00`);
    }
    return hours;
  }

  getPartners() {
    // faker.setLocale('pt_BR');
    return [
      this.generatePartner(),
      this.generatePartner(),
      this.generatePartner(),
      this.generatePartner(),
    ];
  }

  private generatePartner() {
    const partner: Partner = {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      id: faker.random.uuid(),
      photoUrl: faker.image.imageUrl(150, 150, 'people'),
      description: faker.lorem.paragraphs(4),
      profession: faker.name.jobTitle(),
      location: faker.address.city(),
      rating: faker.random.float({ min: 3, max: 5, precision: 0.5 }),
      reviews: faker.random.number({ min: 30, max: 250 }),
      rate: '' + faker.random.number({ min: 60, max: 100, precision: 10 }),
      time: '' + faker.random.number({ min: 40, max: 60, precision: 5 }),
    };

    return partner;
  }
}
