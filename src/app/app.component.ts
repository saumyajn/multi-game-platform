import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RockPaperScissorComponent } from './rock-paper-scissor/rock-paper-scissor.component';
import { MaterialModule } from './common/material.module';
import { HeaderComponent } from './common/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MaterialModule,RouterOutlet, RockPaperScissorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'multi-game-platform';
}
