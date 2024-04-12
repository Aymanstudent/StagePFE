import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanifierChantierComponent } from './planifier-chantier/planifier-chantier.component';
import { PlanifierTechnicienComponent } from './planifier-technicien/planifier-technicien.component';
import {CdkDrag, CdkDropList, CdkDropListGroup} from "@angular/cdk/drag-drop";
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
@NgModule({
  declarations: [
    PlanifierChantierComponent,
    PlanifierTechnicienComponent
  ],
    imports: [
        CommonModule,
        CdkDrag,
        CdkDropList,
        CdkDropListGroup,
        DragDropModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: []
})
export class PlanifierModule { }
