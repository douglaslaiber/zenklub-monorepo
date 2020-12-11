import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
  @Get('/hours')
  getHours() {
    return this.appService.getHours();
  }
  @Get('/partner')
  getPartner() {
    return this.appService.getPartners();
  }
}
