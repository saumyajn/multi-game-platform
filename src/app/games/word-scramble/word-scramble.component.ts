import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { WordScrambleService } from './word-scramble.service';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-word-scramble',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HttpClientModule, MaterialModule],
  providers: [WordScrambleService],
  templateUrl: './word-scramble.component.html',
  styleUrl: './word-scramble.component.scss'
})
export class WordScrambleComponent {
  title = '';
  randomWord
  constructor(private _ActivatedRoute: ActivatedRoute, private service: WordScrambleService) {
    this.title = this._ActivatedRoute.snapshot.queryParams['name'];
  }

  getRandomWord() {
    // this.service.getRandomWord().subscribe((data:
    //   { word: string }) => {
    //   console.log(data)
    //   if (data) {
    //     this.randomWord =
    //       this.shuffleWord(data.word)
    //   }
    // })
    this.randomWord = this.shuffleWord('apple')


  }

  shuffleWord(word: string) {
    return word.split('').sort(() => Math.random() - 0.5)

  }


}
