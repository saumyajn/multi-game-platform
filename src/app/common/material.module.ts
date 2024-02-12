import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
@NgModule({
    exports: [
        MatButtonModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatGridListModule]
})
export class MaterialModule { }