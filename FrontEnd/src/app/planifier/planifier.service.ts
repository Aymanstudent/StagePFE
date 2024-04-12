import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlanifierService {

  link : string = "http://localhost:8080/jour_travailler"
  link_ouvrier : string ="http://localhost:8080/ouvrier"
  link_vehicule : string ="http://localhost:8080/vehicule"
  link_chantier : string = "http://localhost:8080/chantier"
  link_tache : string = "http://localhost:8080/tache"
  private HandlerError: ((reason: any) => (PromiseLike<Object> | Object)) | undefined | null;
  constructor(private http: HttpClient) { }

  afficher_tout_panification(){
    return this.http.get(this.link + "/afficher/tout")
  }

  afficher_planification(id : any){
    return this.http.get(this.link + "/afficher/" + id)
  }

  afficher_ouvriers(){
    return this.http.get(this.link_ouvrier + "/afficher/tout")
  }

  afficher_vehicules(){
    return this.http.get(this.link_vehicule + "/afficher/tout")
  }

  afficher_chantiers(){
    return this.http.get(this.link_chantier + "/afficher/tout")
  }

  afficher_taches(){
    return this.http.get(this.link_tache + "/afficher/tout")
  }

  ajouter_EvenementChantier(evenement : any){
      return this.http.post(this.link + "/ajouter", evenement)
  }

  public modifier_EvenementChantier(evenement : any){
    return this.http.put(this.link + "/modifier", evenement)
  }
}
