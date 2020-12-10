import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerListComponent } from './partner-list/partner-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PartnerListComponent,
  },
];


@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [PartnerListComponent],
  exports: [PartnerListComponent],
})
export class PartnerModule {}
