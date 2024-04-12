import { Component } from '@angular/core';
import {user} from "../../models/User";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor() {}

  displaySelectedImage(event: Event, elementId: string): void {
    const selectedImage: HTMLImageElement = document.getElementById(elementId) as HTMLImageElement;
    const fileInput: HTMLInputElement = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      const reader: FileReader = new FileReader();
      reader.onload = function(e: any) {
        selectedImage.src = e.target.result as string;
      };
      reader.readAsDataURL(fileInput.files[0]);
    }
  }
  user : user = {id : 1, info : {nom : "Ayman", prenom : "Cherif", age : 22, sexe : "Homme", telephone : "55119415", email : "cherifayman45@gmail.com"}, password : "123456789"}

  public urllink :string = "assets/profile-pic%20(1).png"
  selectFile(event : any){
    if(event.target.file){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any)=>{
        this.urllink = event.target.result
      }
    }
  }
}
