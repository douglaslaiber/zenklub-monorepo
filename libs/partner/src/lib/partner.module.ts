import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerListComponent } from './partner-list/partner-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PartnerInfoComponent } from './partner-info/partner-info.component';
import { PartnerScheduleComponent } from './partner-schedule/partner-schedule.component';
import { PartnerCardComponent } from './partner-card/partner-card.component';
import { SharedUiModule } from '@zenklub/shared-ui';

const routes: Routes = [
  {
    path: '',
    component: PartnerListComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    SharedUiModule,
  ],
  declarations: [
    PartnerListComponent,
    PartnerInfoComponent,
    PartnerScheduleComponent,
    PartnerCardComponent,
  ],
  exports: [PartnerListComponent],
  providers: [
    NgbActiveModal,
  ]
})
export class PartnerModule {}
