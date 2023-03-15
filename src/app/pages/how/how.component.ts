import { Component, OnInit } from '@angular/core';
import { defaultRevealAnimation } from 'src/app/shared/animation-defaults.component';

@Component({
  selector: 'app-how',
  templateUrl: './how.component.html',
  styleUrls: ['./how.component.scss'],
  animations : [defaultRevealAnimation]
})
export class HowComponent implements OnInit {
  isMoreRevealed : boolean = false;

  defaultRevealAnimation = 'default'
  constructor(

  ){

  }

  ngOnInit(): void {

  }


  revealMore(){
    this.isMoreRevealed = true;
    this.defaultRevealAnimation = 'revealed'
  } 
}
