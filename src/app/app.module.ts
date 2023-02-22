import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { WhoComponent } from './pages/who/who.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { WhatComponent } from './pages/what/what.component';
import { WhyComponent } from './pages/why/why.component';
import { WhereComponent } from './pages/where/where.component';
import { HowComponent } from './pages/how/how.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    WhoComponent,
    NavigationComponent,
    WhatComponent,
    WhyComponent,
    WhereComponent,
    HowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
