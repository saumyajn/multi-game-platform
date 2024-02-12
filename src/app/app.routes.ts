import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RockPaperScissorComponent } from './rock-paper-scissor/rock-paper-scissor.component';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        component: HomePageComponent
    },
    {
        path: "rock-paper-scissors",
        component: RockPaperScissorComponent
    }
];
