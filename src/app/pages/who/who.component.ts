import { Component, OnInit } from '@angular/core';
import { defaultRevealAnimation } from 'src/app/shared/animation-defaults.component';


@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.scss'],
  animations : [defaultRevealAnimation]
})
export class WhoComponent implements OnInit{
  isAboutMeRevealed : boolean = false;

  defaultRevealAnimation = 'default'
  constructor(

  ){

  }

  ngOnInit(): void {

  }


  revealAboutMe(){
    this.isAboutMeRevealed = true;
    this.defaultRevealAnimation = 'revealed'
  } 
}
