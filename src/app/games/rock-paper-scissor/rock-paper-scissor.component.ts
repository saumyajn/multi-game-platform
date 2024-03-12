import { Component, OnChanges, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';
import { MaterialModule } from '../../material.module';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-rock-paper-scissor',
  standalone: true,
  imports: [MaterialModule, CommonModule, HeaderComponent],
  templateUrl: './rock-paper-scissor.component.html',
  styleUrl: './rock-paper-scissor.component.scss'
})
export class RockPaperScissorComponent {
  title: any;
  defaultArr = ["rock", "paper", "scissor"];
  showUserSelection = false;
  userSelection = '';
  compSelection = '';
  winner = '';
  userScore = signal(0);
  compScore = signal(0);
  constructor(private _ActivatedRoute: ActivatedRoute) {
    this.title = this._ActivatedRoute.snapshot.queryParams['name'];
    
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
      this.winner = 'YOU win!'

    }
    else {
      this.compScore.update(val => val + 1);
      this.winner = 'AI wins! Better Luck next time '
    }
  }
  resetData() {
    this.compScore.set(0);
    this.userScore.set(0)
  }
}
