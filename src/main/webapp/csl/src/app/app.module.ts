import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { SwapiService } from './services/swapi.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule
  ],
  providers: [AppService, SwapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
