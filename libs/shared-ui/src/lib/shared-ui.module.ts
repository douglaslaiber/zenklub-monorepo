import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadMoreComponent } from './read-more/read-more.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ReadMoreComponent],
  exports: [ReadMoreComponent],
})
export class SharedUiModule {}
