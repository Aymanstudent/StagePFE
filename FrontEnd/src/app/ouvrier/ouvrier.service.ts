import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OuvrierService {

  link = "http://localhost:8080/ouvrier/"
  constructor(private http : HttpClient) { }

  afficher_ouvriers(){
    return this.http.get(this.link + "afficher/tout")
  }

  ajouter_ouvrier(ouvrier : any){
    return this.http.post(this.link + "ajouter", ouvrier)
  }

  modifier_ouvrier(ouvrier : any){
    return this.http.put(this.link + "modifier", ouvrier)
  }

  supprimer_ouvrier(id : any){
    return this.http.delete(this.link + "supprimer/" + id)
  }

}
