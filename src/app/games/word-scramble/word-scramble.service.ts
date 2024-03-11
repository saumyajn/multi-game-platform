import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordScrambleService {
  API_KEY = "KgIN1vN9/UnplbJC5p2ZnQ==sfE58SmoDLoJljc5"
  randomWordUrl = 'https://api.api-ninjas.com/v1/randomword';

  constructor(private http: HttpClient) { }

  getRandomWord() {
    return this.http.get(this.randomWordUrl, {
      headers: {
        'X-Api-Key': this.API_KEY
      }
    })
  }
}

