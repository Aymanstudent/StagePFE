import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiviOuvrierComponent } from './suivi-ouvrier/suivi-ouvrier.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SuiviOuvrierComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class OuvrierModule { }
