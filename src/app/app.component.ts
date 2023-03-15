import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Shared } from './services/shared';
import { defaultRevealAnimation } from './shared/animation-defaults.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations : [defaultRevealAnimation]
})
export class AppComponent implements OnInit  {
  title = 'g';
  isLandingPage : boolean = true;
  routeData: any;
  defaultRevealAnimation = 'default';
  fact : any ;
  constructor(
    private router : Router,
    private shared : Shared
  ){

  }
  ngOnInit(): void {
    this.checkIfIsLandingPage();

    this.getFacts();
    setInterval(() => {
      this.getFacts();
    }, 5000);
  } 

  checkIfIsLandingPage(){
    this.defaultRevealAnimation = 'revealed'
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLandingPage = this.router.url === "/"; 
      }
    });
  }

  getFacts(){
    this.shared.getFacts().subscribe((e : any) => {
      this.fact = e.text;
    });
  }



}
