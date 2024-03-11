import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RockPaperScissorComponent } from './games/rock-paper-scissor/rock-paper-scissor.component';
import { BattleshipComponent } from './games/battleship/battleship.component';
import { WordScrambleComponent } from './games/word-scramble/word-scramble.component';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        component: HomePageComponent
    },
    {
        path: "home",
        component: HomePageComponent
    },
    {
        path: "games/rock-paper-scissors",
        component: RockPaperScissorComponent
    },
    {
        path: "games/battleship",
        component: BattleshipComponent
    },
    {
        path: "games/unscramble",
        component: WordScrambleComponent
    }
];
