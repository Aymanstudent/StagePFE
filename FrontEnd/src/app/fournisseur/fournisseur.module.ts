import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SuiviFournisseurComponent} from "./suivi-fournisseur/suivi-fournisseur.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {NgxPrintDirective} from "ngx-print";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    SuiviFournisseurComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    NgxPrintDirective,
    FormsModule
  ]
})
export class FournisseurModule { }
