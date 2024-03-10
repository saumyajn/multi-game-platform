import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SliderComponent } from '../slider/slider.component';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, MaterialModule, SliderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  @ViewChild('templateRefName') el: ElementRef | any;
  constructor(private router: Router) {

  }
  playRPS() {
    this.router.navigate(['games/rock-paper-scissors'])
  }
}
