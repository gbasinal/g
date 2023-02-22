import { Component, OnInit } from '@angular/core';
import { experience } from './career-data';

@Component({
  selector: 'app-where',
  templateUrl: './where.component.html',
  styleUrls: ['./where.component.scss']
})
export class WhereComponent implements OnInit {
  years : any[] = [2013,2015,2016,2017,2018,2020];
  areYearsRevealed : boolean = false;
  isCareerRevealed : boolean = false;
  career = experience;
  selectedYear : any;
  constructor(){}



  ngOnInit(): void {
      
  }



  revealExperience(year : any){
    this.isCareerRevealed = false;
    this.isCareerRevealed = this.isCareerRevealed === false ? true : false;
    this.selectedYear = year;
    
  }

  revealYears(){
    this.areYearsRevealed = this.areYearsRevealed === false ? true : false;
  }
}
