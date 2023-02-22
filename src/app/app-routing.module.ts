import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowComponent } from './pages/how/how.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { WhatComponent } from './pages/what/what.component';
import { WhereComponent } from './pages/where/where.component';
import { WhoComponent } from './pages/who/who.component';
import { WhyComponent } from './pages/why/why.component';

const routes: Routes = [
  { path : "", data: { title: "home" }, component : LandingPageComponent }, 
  { path : "who", data: { title: "who" }, component : WhoComponent },
  { path : "what", data: { title: "what" }, component : WhatComponent },
  { path : "where", data: { title: "where" }, component : WhereComponent },
  { path : "why", data: { title: "why" }, component : WhyComponent },
  { path : "how", data: { title: "how" }, component : HowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
