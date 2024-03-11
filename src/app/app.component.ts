import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RockPaperScissorComponent } from './games/rock-paper-scissor/rock-paper-scissor.component';
import { MaterialModule } from './material.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterOutlet, RockPaperScissorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'multi-game-platform';
}
