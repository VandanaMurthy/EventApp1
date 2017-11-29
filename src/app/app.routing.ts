import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ShomeComponent } from './shome/shome.component';
import { OverviewComponent } from './overview/overview.component';
import { AgendaComponent } from './agenda/agenda.component';
import { SpeakerComponent } from './speaker/speaker.component';



const appRoutes: Routes = [
    {path: '', component: HomeComponent}
    
];

export const appRouterProviders: any[] = [];

export const routing: ModuleWithProviders =
  RouterModule.forRoot(appRoutes);