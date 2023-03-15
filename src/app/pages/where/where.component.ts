import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { childDefaultRevealAnimation, defaultRevealAnimation } from 'src/app/shared/animation-defaults.component';
import { experience } from './career-data';

@Component({
  selector: 'app-where',
  templateUrl: './where.component.html',
  styleUrls: ['./where.component.scss'],
  animations : [defaultRevealAnimation, childDefaultRevealAnimation]
})
export class WhereComponent implements OnInit {
  @ViewChild('dropdown')
  dropdown!: ElementRef;

  years : any[] = [2013,2015,2016,2017,2018,2020];
  areYearsRevealed : boolean = false;
  isCareerRevealed : boolean = false;
  career = experience;
  selectedYear : any;

  defaultRevealAnimation = 'default';
  childDefaultRevealAnimation = 'default';
  isDropdownOpen = false;
  constructor(){}



  ngOnInit(): void {
    
  }



  revealExperience(year : any){
    
    this.isCareerRevealed = false;
    this.isCareerRevealed = this.isCareerRevealed === false ? true : false;
    this.selectedYear = year;
    this.childDefaultRevealAnimation = 'revealed';
    this.isDropdownOpen = false;
    
  }

  revealYears(){
    this.areYearsRevealed = this.areYearsRevealed === false ? true : false;
    this.defaultRevealAnimation = 'revealed'
  }


  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    console.log(this.isDropdownOpen)
  }

  
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.dropdown.nativeElement.contains(event.target)) {
      this.isDropdownOpen = false;
    }
  }
}
