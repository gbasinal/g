import { Component, OnInit } from '@angular/core';
import { defaultRevealAnimation } from 'src/app/shared/animation-defaults.component';
import { wordBank } from 'src/app/shared/words';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations : [defaultRevealAnimation]
})
export class LandingPageComponent implements OnInit {
  defaultRevealAnimation : any = "default";
  wordBank = wordBank;
  randomizedWord : any = "front-end developer";
  constructor(

  ){}

  ngOnInit(): void {
    this.defaultRevealAnimation = "revealed";
    this.shuffleWordBank();
  }

  shuffleWordBank() {
    let currentIndex = 0;
    this.wordBank.sort(() => Math.random() - 0.5);
    let intervalId = setInterval(() => {
      this.randomizedWord = '';
      const nextWord = this.wordBank[currentIndex % this.wordBank.length];
      this.rotateWords(nextWord);
      currentIndex++;
    }, 3000);
    return () => clearInterval(intervalId);
  }
  
  rotateWords(nextWord: any) {
    let typingSpeed = 50; // milliseconds per character
    let typedIndex = 0;  
    this.updateDisplay(this.wordBank, nextWord, typedIndex, typingSpeed);
  }
  
  updateDisplay(wordBank: any[], nextWord: any, typedIndex: any, typingSpeed: any) {
    this.randomizedWord = wordBank[typedIndex % wordBank.length];
    typedIndex++;
    if (typedIndex / wordBank.length < 1) {
      setTimeout(() => {
        this.updateDisplay(wordBank, nextWord, typedIndex, typingSpeed);
      }, typingSpeed);
    } else {
      this.randomizedWord = nextWord;
    }
  }

}


