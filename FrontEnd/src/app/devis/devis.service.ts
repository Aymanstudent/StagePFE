import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class DevisService {
  devis_link = "http://localhost:8080/devis"
  link = "http://localhost:8080/demande"
  panneauSolaire_link = "http://localhost:8080/panneausolaire"
  onduleur_link = "http://localhost:8080/onduleur"
  systemeFixation_link = "http://localhost:8080/systemefixation"
  cable_link = "http://localhost:8080/cable"
  compteur_link = "http://localhost:8080/compteur"
  batterie_link = "http://localhost:8080/batterie"
  mail_link =  "http://localhost:8080/mail"
  chantier_link = "http://localhost:8080/chantier"
  client_link = "http://localhost:8080/client"
  demande : any
  constructor(private http:HttpClient) { }

  afficher_client(){
    return this.http.get(this.link  + "/client/tout/afficher")
  }

  ajouter_demande(demande : any){
    return this.http.post(this.link + "/ajouter",demande)
  }

  afficher_demande(){
    return this.http.get(this.link + "/afficher/tout")
  }

  supprimerDemande(id : any){
    return this.http.delete(this.link + "/supprimer/" + id);
  }

  modifierDemande(demande : any){
    return this.http.put(this.link + "/modifier", demande)
  }

  afficher_panneauSolaires(){
    return this.http.get(this.panneauSolaire_link + "/afficher/tout")
  }
  afficher_onduleurs(){
    return this.http.get(this.onduleur_link + "/afficher/tout")
  }
  afficher_systemeFixations(){
    return this.http.get(this.systemeFixation_link + "/afficher/tout")
  }
  afficher_cables(){
    return this.http.get(this.cable_link + "/afficher/tout")
  }
  afficher_compteurs(){
    return this.http.get(this.compteur_link + "/afficher/tout")
  }
  afficher_batteries(){
    return this.http.get(this.batterie_link + "/afficher/tout")
  }

  ajouter_devis(devis : any){
    return this.http.post(this.devis_link + "/ajouter", devis)
  }

  afficher_devis(){
    return this.http.get(this.devis_link + "/afficher/tout")
  }

  supprimer_devis(id : any){
    return this.http.delete(this.devis_link + "/supprimer/" + id)
  }

  modifier_devis(devis : any){
    return this.http.put(this.devis_link + "/modifier", devis)
  }

  ajouter_chantier(chantier : any){
    return this.http.post(this.chantier_link + "/ajouter", chantier)
  }

  afficher_demandeDevis_parDevis(id : any){
    return this.http.get(this.link + "/afficher/" + id)
  }

  ajouterCLient(client : any){
    return this.http.post(this.client_link + "/ajouter" , client)
  }
  envoierMail(email : any){
    return this.http.post(this.mail_link + "/envoier", email)
  }
}
