import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, SliderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(private router: Router) {

  }
  playRPS() {
    this.router.navigate(['games/rock-paper-scissors'])
  }
}
