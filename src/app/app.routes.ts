import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RockPaperScissorComponent } from './games/rock-paper-scissor/rock-paper-scissor.component';
import { BattleshipComponent } from './games/battleship/battleship.component';

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
    }
];
