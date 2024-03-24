import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordScrambleService {
  API_KEY = "KgIN1vN9/UnplbJC5p2ZnQ==sfE58SmoDLoJljc5"
  randomWordUrl = 'https://random-word-api.herokuapp.com/word'

  constructor(private http: HttpClient) { }

  getRandomWord(difficultyLevel) {
    let url = '';
    switch (difficultyLevel) {
      case '0': url = this.randomWordUrl;
        break;
      case '1': url = `${this.randomWordUrl}?length=5`;
        break;
      case '2': url = `${this.randomWordUrl}?length=7`;
        break;
      case '3': url = `${this.randomWordUrl}?length=9`;
        break;
      default: url = this.randomWordUrl; break;
    }
    return this.http.get(url)
  }
}

