import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  link = "http://localhost:8080/client"
  constructor(private http:HttpClient) { }

  ajouter_client(client : any){
    return this.http.post(this.link + "/ajouter" , client)
  }

  modifier_client(client : any){
    return this.http.put(this.link + "/modifier" , client)
  }

  supprimer_client(id : any){
    return this.http.delete(this.link + "/supprimer/" + id)
  }

  afficher_tout(){
    return this.http.get(this.link + "/afficher/tout")
  }
}
