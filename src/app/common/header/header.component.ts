import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isSidenavOpen = false;
  ngOnInit(): void {
  }
  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
