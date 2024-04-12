import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

export interface onduleur{
  marque: String,
  modele: String,
  puissance_nominal: number,
  tension_nominal: number,
  courant_nominal: number,
  rendement: number,
  type: String
}
@Component({
  selector: 'app-onduleur',
  templateUrl: './onduleur.component.html',
  styleUrls: ['./onduleur.component.css']
})
export class OnduleurComponent implements OnInit{
  constructor() {}

  ngOnInit() {}
}
