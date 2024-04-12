import {Component, OnInit} from '@angular/core';
import {OuvrierService} from "../ouvrier.service";

@Component({
  selector: 'app-suivi-ouvrier',
  templateUrl: './suivi-ouvrier.component.html',
  styleUrls: ['./suivi-ouvrier.component.css']
})
export class SuiviOuvrierComponent implements OnInit{

  constructor(public service: OuvrierService) {}

  ouvriers : any = []
  ouvrier : any = {
    id : "",
    personne : {
      nom : "",
      prenom : "",
      age : "",
      sexe : "",
      email : "",
      telephone  : "",
      adresse : ""
    },
    profesion : "",
    image : ""
  }
  afficher_ouvrier(){
    this.service.afficher_ouvriers().subscribe(
      res=>{
        this.ouvriers = res
      },err=>{
        console.log(err)
      }
    )
  }

  ajouter_ouvrier(){
    this.service.ajouter_ouvrier(this.ouvrier).subscribe(
      err=>{
        console.log(err)
      }
    )
  }

  modifier_ouvrier(){
    this.service.modifier_ouvrier(this.ouvrier).subscribe(
      err=>{
        console.log(err)
      }
    )
  }

  supprimer_ouvrier(){
    this.service.supprimer_ouvrier(this.ouvrier.id).subscribe(
      err=>{
        console.log(err)
      }
    )
    location.reload()
  }
  getImageUrl(base64String: string | null): string {
    return base64String ? `${base64String}` : ''; // Handle missing image
  }

  affecter_ouvrier(ouvrier : any){
    this.ouvrier = ouvrier
  }

  onFileChange(event : any){
    const file = event.target.files[0];
    const  reader = new FileReader();

    reader.onload = () =>{
      const base64String  =reader.result as string;
      this.ouvrier.image = base64String;
    };

    if (file){
      reader.readAsDataURL(file);
    }
  }

  ngOnInit() {
    this.afficher_ouvrier()
  }
}
