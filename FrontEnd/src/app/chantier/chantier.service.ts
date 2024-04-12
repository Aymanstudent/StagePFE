import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChantierService {

  link = "http://localhost:8080/"
  chantier : any;
  constructor(private http:HttpClient) { }

  Lister_chantiers(){
    return this.http.get(this.link + "chantier/afficher/tout")
  }

  afficher_client(id : any){
    return this.http.get(this.link + "client/afficher/" +  id)
  }

  afficher_plainf(id : any){
    return this.http.get(this.link + "evenement/afficher/chantier/" + id)
  }

  afficher_avenants(id : any){
    return this.http.get(this.link + "avenant/afficher/chantier/tout/" + id)
  }

  afficher_facture(id : any){
    return this.http.get(this.link + "facture/afficher/chantier/" + id)
  }

  afficher_materiaux(id : any){
    return this.http.get(this.link + "devis/afficher/" + id)
  }
}

