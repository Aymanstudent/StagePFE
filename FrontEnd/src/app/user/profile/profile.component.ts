import {Component, OnInit} from '@angular/core';
import {user} from "../../models/User";
import {TokenService} from "../../services/token/token.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  constructor(private tokenService : TokenService) {}

  public user : any = {
    nom : "",
    prenom : ""
  }
  UserEmail : string = ""
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

  ngOnInit() {
    const Tokenuser = this.tokenService.decodeToken(this.tokenService.token)
    this.UserEmail = Tokenuser.email
  }

  getUserByEmail(){

  }

}
