import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { ViewConstructionComponent } from './view-construction/view-construction.component';
import { ViewListConstructionComponent } from './view-list-construction/view-list-construction.component';
import { NewConstructionComponent } from './new-construction/new-construction.component';



@NgModule({
  declarations: [
    ViewConstructionComponent,
    ViewListConstructionComponent,
    NewConstructionComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class ConstructionModule { }
