import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
    exports: [
        MatButtonModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatGridListModule,
        MatInputModule,
        MatFormFieldModule, 
        MatButtonToggleModule,
        MatRippleModule
        ]
})
export class MaterialModule { }