import {Component, OnInit} from '@angular/core';
import {TokenService} from "../services/token/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  constructor(private tokenService : TokenService, private route : Router) {
  }
  private myDecodedToken : any
  private token : any = localStorage.getItem('token')
  public technicien : boolean = false
  public secretaire : boolean = false
  public gestionnaire : boolean = false
  ngOnInit() {
    this.myDecodedToken = this.tokenService.decodeToken(this.token);
    console.log(this.myDecodedToken)
    if(this.myDecodedToken.authorities[0] == "TECHNICIEN"){
      this.technicien = true
    }else if(this.myDecodedToken.authorities[0] == "GESTIONNAIRE"){
      this.gestionnaire = true
    }else if(this.myDecodedToken.authorities[0] == "OUVRIER"){
      this.secretaire = true
    }
  }

  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['login'])
  }
}
