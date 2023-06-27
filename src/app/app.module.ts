import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './dashboard/landing/landing.component';
import { SettingComponent } from './dashboard/setting/setting.component';
import { CalenderComponent } from './dashboard/calender/calender.component';
import { ChartComponent } from './dashboard/chart/chart.component';
import { GridComponent } from './dashboard/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LandingComponent,
    SettingComponent,
    CalenderComponent,
    ChartComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
