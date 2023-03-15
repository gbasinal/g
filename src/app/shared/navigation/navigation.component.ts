import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { defaultRevealAnimation } from '../animation-defaults.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations : [defaultRevealAnimation]
})
export class NavigationComponent implements OnInit{
  mode : string = "regular"
  defaultRevealAnimation = 'default'

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer : Renderer2
  ){}

  ngOnInit(): void {
    this.defaultRevealAnimation = "revealed";
  }
  switchMode(){
    this.mode = this.mode === "regular" ? "solid" : "regular";
    const classToAdd = this.mode === "regular" ? 'day' : 'night';
    const classToRemove = this.mode === "regular" ? 'night' : 'day';
    this.renderer.addClass(this.document.body, classToAdd);
    this.renderer.removeClass(this.document.body, classToRemove);
  }

  closeMenu() {
    const checkbox = document.querySelector('#menuToggle input[type="checkbox"]') as HTMLInputElement;
    checkbox.checked = false;
  }
}
