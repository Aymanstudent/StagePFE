import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StockService {

  PanneauxLink = "http://localhost:8080/panneausolaire"
  OnduleurLink = "http://localhost:8080/onduleur"
  SystemeFixationLink = "http://localhost:8080/systemefixation"
  CableLink = "http://localhost:8080/cable"
  BatterieLink = "http://localhost:8080/batterie"
  ComptuerLink = "http://localhost:8080/compteur"
  constructor(private http : HttpClient) { }

  ajouter_panneau(panneau : any){
    return this.http.post(this.PanneauxLink + "/ajouter", panneau)
  }

  modifier_panneau(panneau : any){
    return this.http.put(this.PanneauxLink + "/modifier", panneau)
  }

  supprimer_panneau(id : any){
    return this.http.delete(this.PanneauxLink + "/supprimer/" + id)
  }

  afficher_panneau(){
    return this.http.get(this.PanneauxLink + "/afficher/tout")
  }
}
