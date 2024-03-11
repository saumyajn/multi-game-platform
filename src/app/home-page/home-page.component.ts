import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SliderComponent } from '../slider/slider.component';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

interface gamesListModel {
  name: string,
  imgUrl?: string,
  path_name: string
}
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, CommonModule, MaterialModule, SliderComponent, HttpClientModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  @ViewChild('templateRefName') el: ElementRef | any;
  gamesList: gamesListModel[] = [
    { name: 'Rock Paper Scissors', path_name: "games/rock-paper-scissors" },
    { name: 'BattleShip', path_name: "games/battleship" },
    { name: 'Un-Sramble', path_name: "games/unscramble" },
    { name: 'Tic Tac Toe', path_name: "" },
    { name: 'Minion Maze', path_name: "" },
    { name: 'Guess the number', path_name: "" }]

  constructor(private router: Router) {

  }
  playGame(selectedGame: gamesListModel) {

    this.router.navigate([selectedGame.path_name], {queryParams: { name: selectedGame.name }})
  }
}
