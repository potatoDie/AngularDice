import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DieComponent } from './die/die.component';

import { RandomNumberService } from './random-number.service';

@NgModule({
  declarations: [
    AppComponent,
    DieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [RandomNumberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
