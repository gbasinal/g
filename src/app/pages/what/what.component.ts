import { Component, OnInit } from '@angular/core';
import { defaultRevealAnimation, spanAnimationForProject, spanAnimationForPlayGround, childDefaultRevealAnimation } from 'src/app/shared/animation-defaults.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-what',
  templateUrl: './what.component.html',
  styleUrls: ['./what.component.scss'],
  animations : [defaultRevealAnimation, spanAnimationForPlayGround, spanAnimationForProject, childDefaultRevealAnimation]
})
export class WhatComponent implements OnInit {
  isShowcaseRevealed = false;
  defaultRevealAnimation = 'default';
  panelState = 'front';

  isProjectClicked : boolean = true;
  isPlaygroundClicked : boolean = true;

  clickedPanel :any = 'projects';

  imgURL = environment.assetsPath+"/img";
  childDefaultRevealAnimation = 'default';
  constructor(){

  }

  ngOnInit(): void {
      
  }

  revealProjects(){
    this.isShowcaseRevealed = true;
    this.defaultRevealAnimation = 'revealed'
  }
  span(panel : any){
    setTimeout(() =>{
      this.childDefaultRevealAnimation = this.childDefaultRevealAnimation === 'default' ? 'revealed' : 'default';
    },100)
    
    if(panel == 'projects'){
      this.panelState = this.panelState === 'front' ? 'spannedProject' : 'front';
      this.isPlaygroundClicked = this.isPlaygroundClicked  ? false : true;
      this.isProjectClicked = true;
      

    }else {
      this.panelState = this.panelState === 'front' ? 'spannedPlayground' : 'front';
      this.isPlaygroundClicked = true;
      this.isProjectClicked = this.isProjectClicked ? false : true;
    }

  }


  
}
