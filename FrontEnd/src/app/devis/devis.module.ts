import { NgModule } from '@angular/core';
import {AsyncPipe, CommonModule} from '@angular/common';
import {NgxPrintDirective} from "ngx-print";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreerDevisComponent } from './creer-devis/creer-devis.component';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuiviDemandeDevisComponent } from './suivi-demande-devis/suivi-demande-devis.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { SuiviDevisComponent } from './suivi-devis/suivi-devis.component';



@NgModule({
  declarations: [
    CreerDevisComponent,
    SuiviDemandeDevisComponent,
    SuiviDevisComponent,

  ],
  imports: [
    CommonModule,
    NgxPrintDirective,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    AsyncPipe,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class DevisModule { }
