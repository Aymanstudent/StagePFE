import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        RouterLink
    ]
})
export class WelcomeModule { }
