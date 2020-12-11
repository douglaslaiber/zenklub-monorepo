import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TopComponent } from './top/top.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NavbarComponent, TopComponent],
  exports: [NavbarComponent, TopComponent],
})
export class CommonUiModule {}
