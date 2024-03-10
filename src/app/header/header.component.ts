import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MaterialModule } from '../material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  @ViewChild('templateRefName') el: ElementRef | any;
  offSetHeight = 150;
  isSidenavOpen = false;
  constructor(private router: Router, private renderer: Renderer2) {

  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
      this.renderer.setStyle(this.el._elementRef.nativeElement, 'top', 0);
      this.renderer.setStyle(this.el._elementRef.nativeElement, 'height', '70px');

      this.renderer.setStyle(this.el._elementRef.nativeElement, 'background', '#f5f4f4eb');
      // this.renderer.setStyle(this.el._elementRef.nativeElement, 'background', 'rgb(238,150,75,0.9)');


    }
    else {
      this.renderer.removeStyle(this.el._elementRef.nativeElement, 'background');
      this.renderer.setStyle(this.el._elementRef.nativeElement, 'top', '10px')
    }
  }
  toggleSidenav() {
    this.router.navigate(['/home'])
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
