import { BrowserModule } from '@angular/platform-browser';
import { NgModule , } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonUiModule } from '@zenklub/common-ui';
// import { PartnerModule } from '@zenklub/partner';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CommonUiModule,
    HttpClientModule ,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
