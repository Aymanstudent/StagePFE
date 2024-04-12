import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiviClientComponent } from './suivi-client/suivi-client.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";



@NgModule({
    declarations: [
        SuiviClientComponent,
    ],
    exports: [
        SuiviClientComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatTableModule,
        MatPaginatorModule
    ]
})
export class ClientModule { }
