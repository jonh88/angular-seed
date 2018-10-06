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
    declarations: [NavComponent, FooterComponent, ShellMainComponent, HeaderComponent],
    imports: [
        CommonModule,
        RouterModule,
    ],
})
export class ShellModule { }
