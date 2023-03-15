import { Component, OnInit } from '@angular/core';
import { defaultRevealAnimation} from 'src/app/shared/animation-defaults.component';


@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.scss'],
  animations : [defaultRevealAnimation]
})
export class WhyComponent implements OnInit {
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
