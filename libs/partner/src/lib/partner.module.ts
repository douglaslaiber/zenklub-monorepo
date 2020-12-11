import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerListComponent } from './partner-list/partner-list.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PartnerInfoComponent } from './partner-info/partner-info.component';
import { PartnerScheduleComponent } from './partner-schedule/partner-schedule.component';
import { PartnerCardComponent } from './partner-card/partner-card.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), NgbModule],
  declarations: [PartnerListComponent, HomeComponent, PartnerInfoComponent, PartnerScheduleComponent, PartnerCardComponent],
  exports: [PartnerListComponent, HomeComponent],
})
export class PartnerModule {}
