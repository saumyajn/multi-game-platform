import { Component, OnChanges, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';
import { MaterialModule } from '../../material.module';


@Component({
  selector: 'app-rock-paper-scissor',
  standalone: true,
  imports: [MaterialModule, CommonModule, HeaderComponent],
  templateUrl: './rock-paper-scissor.component.html',
  styleUrl: './rock-paper-scissor.component.scss'
})
export class RockPaperScissorComponent {
  defaultArr = ["rock", "paper", "scissor"];
  showUserSelection = false;
  userSelection = '';
  compSelection = '';
  winner = '';
  userScore = signal(0);
  compScore = signal(0)
  constructor() {

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
      this.winner = "It's a tie!"
    }
    else if (user === 'rock' && comp == 'scissor' || user === 'scissor' && comp == 'paper' || user === 'paper' && comp == 'rock') {
      this.userScore.update(val => val + 1)
      this.winner = 'User wins!'

    }
    else {
      this.compScore.update(val => val + 1);
      this.winner = 'Computer wins!'
    }
  }
  resetData() {
    this.compScore.set(0);
    this.userScore.set(0)
  }
}
