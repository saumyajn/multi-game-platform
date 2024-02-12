import { Component, OnChanges, OnInit } from '@angular/core';
import { MaterialModule } from '../common/material.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../common/header/header.component';

@Component({
  selector: 'app-rock-paper-scissor',
  standalone: true,
  imports: [MaterialModule, CommonModule,HeaderComponent],
  templateUrl: './rock-paper-scissor.component.html',
  styleUrl: './rock-paper-scissor.component.scss'
})
export class RockPaperScissorComponent implements OnChanges {
  defaultArr = ["rock", "paper", "scissor"];
  showUserSelection = false;
  userSelection = '';
  compSelection = ''
  constructor() {

  }
  ngOnChanges(): void {

  }
  playGame(selection: string) {
    this.showUserSelection = true;
    this.userSelection = selection;
    this.runRandomGame();
    this.checkWinner(this.userSelection, this.compSelection)
  }
  runRandomGame() {
    return this.compSelection = this.defaultArr[Math.floor((Math.random() * this.defaultArr.length))]
  }
  checkWinner(user: string, comp: string) {
    if (user === comp) {
      console.log("TIE")
    }
    if (user === 'rock' && comp == 'scissor' || user === 'scissor' && comp == 'paper' || user === 'paper' && comp == 'rock')
      console.log('you win')
    else 
    console.log("you loose")
  }
}
