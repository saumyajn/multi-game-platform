import { Component, ElementRef, Inject, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';

interface SliderInterface {
  url: string,
  title: string
};
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements OnInit, OnDestroy {

  slides: SliderInterface[] = [
    { url: "assets/images/slider-images/animated-gif-cover.gif", title: 'Rock Paper Scissor' },
    { url: "assets/images/slider-images/battleship.gif", title: 'Battleship' },
    { url: "assets/images/slider-images/scramble.gif", title: 'Word scramble' },
    { url: "assets/images/slider-images/ttt.gif", title: 'Tic Tac Toe' }
  ]
  imgUrl = "assets/images/slider-images/rps.png";
  currentIndex: number = 0;
  timeOutId?: number

  ngOnInit(): void {
    if (typeof window !== "undefined") {
      this.resetTimer()
      // browser code
    }
  }
  resetTimer() {
  
    if (this.timeOutId) {
      window.clearTimeout(this.timeOutId)
    } if (typeof window !== "undefined")
      this.timeOutId = window.setTimeout(() => this.goToNext(), 7500)

  }
  goToPrevious() {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }
  goToNext() {
    console.log('next')
    let  isLastSlide = this.currentIndex === this.slides.length - 1;
 
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.resetTimer();
    this.currentIndex = newIndex
  }
  goToSlide(slideIndex) {
    console.log("slide");
    this.resetTimer();
    this.currentIndex = slideIndex
  }
  getCurrentSlideUrl() {
    return `url(${this.slides[this.currentIndex].url})`
  }
  getCurrentSlideTitle() {
    return `${this.slides[this.currentIndex].title}`
  }
  ngOnDestroy(): void {
    if (typeof window !== "undefined")
      window.clearTimeout(this.timeOutId)
  }
}
