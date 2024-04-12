import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanneauSolaireComponent } from './panneau-solaire/panneau-solaire.component';
import { OnduleurComponent } from './onduleur/onduleur.component';
import { PhotovoltaiqueComponent } from './photovoltaique/photovoltaique.component';
import { DataTablesModule } from "angular-datatables";
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SystemeFixationComponent } from './systeme-fixation/systeme-fixation.component';
import { CableComponent } from './cable/cable.component';
import { BatteriComponent } from './batteri/batteri.component';
import { CompteurComponent } from './compteur/compteur.component';

@NgModule({
  declarations: [
    PanneauSolaireComponent,
    OnduleurComponent,
    PhotovoltaiqueComponent,
    SystemeFixationComponent,
    CableComponent,
    BatteriComponent,
    CompteurComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    HttpClientModule
  ]
})
export class StockModule { }
