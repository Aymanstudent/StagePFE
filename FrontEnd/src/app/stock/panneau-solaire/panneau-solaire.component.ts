import {Component, OnInit} from '@angular/core';
import {StockService} from "../stock.service";
import {PanneauSolaire} from "../../models/PanneauSolaire";
@Component({
  selector: 'app-panneau-solaire',
  templateUrl: './panneau-solaire.component.html',
  styleUrls: ['./panneau-solaire.component.css']
})


export class PanneauSolaireComponent implements OnInit{
  constructor(private service:StockService) {}

  panneauxSolaire: any;
  quantite : any = 0
  panneau : PanneauSolaire = {
    id : "",
    modele : "",
    puissance_nominal : "",
    tension_maximal : "",
    courant_maximal : "",
    height : 0,
    width : 0,
    poids : 0,
    type_cellule_colaire : "",
    garantie : "",
    prix : 0,
    quantite : 0,
    image : ""
  }

  getImageUrl(base64String: string | null): string {
    return base64String ? `${base64String}` : ''; // Handle missing image
  }
  ngOnInit() {
    this.service.afficher_panneau().subscribe(
      res=>{
        this.panneauxSolaire = res
      },err=>{
        console.log(err)
      }
    )
  }
  onKey(event : any) {this.quantite = parseInt(event.target.value);}
  ajouter_quantite(Panneau : any){
    Panneau.quantite += this.quantite;
    this.service.modifier_panneau(Panneau).subscribe(
      err=>{
        console.log(err)
      }
    )
  }

  ajouter_panneauSolaire(){
    this.service.ajouter_panneau(this.panneau).subscribe(
      res=>{console.log(res)},
      err=>{console.log(err)}
    )
  }

  modifier_panneauSolaire(){
    this.service.modifier_panneau(this.panneau).subscribe(
      res=>{console.log(res)},
      err=>{console.log(err)}
    )
  }

  affecterPanneau(p : any){
    this.panneau = p
  }

  onFileChange(event : any){
    const file = event.target.files[0];
    const  reader = new FileReader();

    reader.onload = () =>{
      const base64String  =reader.result as string;
      this.panneau.image = base64String;
    };

    if (file){
      reader.readAsDataURL(file);
    }
  }
}




