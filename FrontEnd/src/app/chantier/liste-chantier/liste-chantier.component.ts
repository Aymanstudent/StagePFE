import {Component, OnInit} from '@angular/core';
import {ChantierService} from "../chantier.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-liste-chantier',
  templateUrl: './liste-chantier.component.html',
  styleUrls: ['./liste-chantier.component.css']
})
export class ListeChantierComponent implements OnInit{

  constructor(public service : ChantierService, private route : Router) {
  }
  chantiers : any = []
  client : any = []
  ngOnInit() {
    this.service.Lister_chantiers().subscribe(
      res=>{this.chantiers = res},err =>{console.log(err)}
    )
  }

  suivi_chantier(chantier : any){
    this.service.chantier = chantier
    this.route.navigateByUrl("photovoltaique/chantier/suivi")
  }
}
