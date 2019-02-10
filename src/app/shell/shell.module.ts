import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
    NavComponent,
    FooterComponent,
    ShellMainComponent,
    HeaderComponent
} from './components';

@NgModule({
    declarations: [
        ShellMainComponent,
        HeaderComponent,
        FooterComponent,
        NavComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
})
export class ShellModule { }
