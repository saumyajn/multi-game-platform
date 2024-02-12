import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements OnInit {
  @ViewChild('imgRefName') el: ElementRef | any;
  idx = 0;
  img: any;
  elementRef: ElementRef;
  interval: any;
  constructor(private renderer: Renderer2, @Inject(ElementRef) elementRef: ElementRef) {
    this.elementRef = elementRef;

  }
  ngOnInit(): void {
    // this.imgs = document.querySelector('#imgs');
    clearInterval(this.interval);
    
    this.interval = setInterval(this.run, 4000)
    // setTimeout(() => {
    //   this.changeImage()
    // }, 1000)

  }
  run(): void {
    this.idx++;

    // this.changeImage();
  }
  changeImage() {
    
    this.img = this.elementRef.nativeElement.querySelectorAll('img');

    if (this.idx > this.img.length - 1) {
      console.log("first if"); this.idx = 0
    }
    else {
      console.log("second i")
      console.log(this.el.nativeElement)
      this.idx = this.img.length - 1;
      // this.renderer.setStyle(this.el.nativeElement, 'transform', `translateX(${-this.idx * 500}px)`)
    }
  }
}
