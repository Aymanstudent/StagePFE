import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Fournisseur} from "../models/fournisseur";

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  lien = "http://localhost:8080/fournisseur"
  constructor(private Http : HttpClient) { }

  public afficherFournissuers(): Observable<object>{
    return this.Http.get(this.lien + "/afficher/tout")
  }

  public ajouterFournisseur(f : Fournisseur): Observable<object>{
    return this.Http.post(this.lien + "/ajouter", f)
  }

  public modifierFournisseur(f : Fournisseur): Observable<object>{
    return this.Http.put(this.lien + "/modifier", f)
  }

  public supprimerFournisseur(id : any): Observable<object>{
    return this.Http.delete(this.lien + "/supprimer/" + id)
  }


}
