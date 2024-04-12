import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeChantierComponent } from './liste-chantier/liste-chantier.component';
import {FormsModule} from "@angular/forms";
import {MatTabsModule} from "@angular/material/tabs";
import { SuiviChantierComponent } from './suivi-chantier/suivi-chantier.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {NgxPrintDirective} from "ngx-print";



@NgModule({
  declarations: [
    ListeChantierComponent,
    SuiviChantierComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        MatTabsModule,
        MatPaginatorModule,
        MatTableModule,
        NgxPrintDirective
    ]
})
export class ChantierModule { }
