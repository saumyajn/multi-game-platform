import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Inject, Input } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { WordScrambleService } from './word-scramble.service';
import { MaterialModule } from '../../material.module';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-word-scramble',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HttpClientModule, MaterialModule, ReactiveFormsModule],
  providers: [WordScrambleService],
  templateUrl: './word-scramble.component.html',
  styleUrl: './word-scramble.component.scss'
})
export class WordScrambleComponent {

  title = '';

  wordForm = new FormControl('');
  isScramble: boolean = false;
  shuffledWordArr: string[];
  randomWord: string;

  constructor(private _ActivatedRoute: ActivatedRoute, private service: WordScrambleService, public dialog: MatDialog) {
    this.title = this._ActivatedRoute.snapshot.queryParams['name'];
  }

  checkWord() {
    console.log(this.wordForm.value, this.randomWord);
    if (this.wordForm.value !== this.randomWord) {
      console.log("TRY AGAIN")

    }
    else {
      this.shuffledWordArr = this.randomWord.split('');
      let dialogRef = this.dialog.open(DialogElementsDialog, {
        data: this.randomWord
      })
      dialogRef.afterClosed().subscribe(result => {
        console.log(result)
        if (result.event == 'nextWord') {
          this.getRandomWord();
        }
      })

    }

  }
  getRandomWord() {
    this.isScramble = true;
    this.service.getRandomWord().subscribe((data:
      { word: string }) => {
      console.log(data)
      if (data) {
        this.randomWord = data.word;

        this.shuffledWordArr =
          this.shuffleWord(data.word)
      }
    })
    // this.randomWord = 'apple'
    this.shuffledWordArr = this.shuffleWord(this.randomWord)

  }

  shuffleWord(word: string) {
    return word.split('').sort(() => Math.random() - 0.5)
  }

}

@Component({
  selector: 'dialog-elements',
  templateUrl: 'dialog-elements.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
})
export class DialogElementsDialog {

  constructor(public dialogRef: MatDialogRef<DialogElementsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: string) {
    console.log(data)
  }
  nextWord() {
    this.dialogRef.close({ event: 'nextWord' })
  }
}