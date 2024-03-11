import { CommonModule, DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, Renderer2, ViewChild } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-battleship',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './battleship.component.html',
  styleUrl: './battleship.component.scss'
})
export class BattleshipComponent implements AfterViewInit {

  title = '';
  playerEl;
  compEl;
  playerGrid: any;
  compGrid: any;
  playerShips
  constructor(private _ActivatedRoute: ActivatedRoute, @Inject(DOCUMENT) document: Document) {
    this.playerEl = document.getElementById('playerGrid');
    this.compEl = document.getElementById('computerGrid');
    this.title = this._ActivatedRoute.snapshot.queryParams['name'];

  }
  ngAfterViewInit(): void {
    this.playerGrid = Array(10).fill(0);
    this.compGrid = Array(10).fill(0);

    this.creatGrid('playerGrid');
  }
  creatGrid(gridId) {

    for (let i = 0; i < 5; i++) {

      // cell.className = 'cell';
    }

    console.log(this.playerEl)
  }
}
