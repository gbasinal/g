import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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

  constructor(
    private router : Router,
  ){

  }
  ngOnInit(): void {
    this.checkIfIsLandingPage();
  } 

  checkIfIsLandingPage(){
    this.defaultRevealAnimation = 'revealed'
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(this.router.url)
        this.isLandingPage = this.router.url === "/" ? true : false; 
      }
    });
  }



}
