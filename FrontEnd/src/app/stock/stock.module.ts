import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from "angular-datatables";
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SolarPanelComponent } from './solar-panel/solar-panel.component';
import {NgCircleProgressModule} from "ng-circle-progress";
import { InverterComponent } from './inverter/inverter.component';

@NgModule({
  declarations: [
    SolarPanelComponent,
    InverterComponent
  ],
    imports: [
        CommonModule,
        DataTablesModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        FormsModule,
        HttpClientModule,
        NgCircleProgressModule,NgCircleProgressModule.forRoot({
        // set defaults here
        radius: 100,
        outerStrokeWidth: 16,
        innerStrokeWidth: 8,
        outerStrokeColor: "#78C000",
        innerStrokeColor: "#C7E596",
        animationDuration: 300,
      })
    ]
})
export class StockModule { }
