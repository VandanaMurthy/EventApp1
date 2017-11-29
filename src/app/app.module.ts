import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { routing, appRouterProviders } from './app.routing';
import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ShomeComponent } from './shome/shome.component';
import { OverviewComponent } from './overview/overview.component';
import { AgendaComponent } from './agenda/agenda.component';
import { SpeakerComponent } from './speaker/speaker.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    ShomeComponent,
    OverviewComponent,
    AgendaComponent,
    SpeakerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing
  ],
  providers: [ appRouterProviders,
        [{provide: APP_BASE_HREF, useValue: '/'}],
        [{provide: LocationStrategy, useClass: HashLocationStrategy}] //Adds # to URL
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
