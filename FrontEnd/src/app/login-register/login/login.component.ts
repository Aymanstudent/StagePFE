import { Component } from '@angular/core';
import {AuthenticationRequest} from "../../services/models/authentication-request";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/services/authentication.service";
import {TokenService} from "../../services/token/token.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router,
              private authService: AuthenticationService,
              private tokenService: TokenService) {
  }


  authRequest : AuthenticationRequest = { email : '', password : ''};
  errorMsg: Array<string> = [];
  public login(): void {
    this.errorMsg = []
    this.authService.authenticate(
      {
        body: this.authRequest
      }).subscribe({
      next: (res)=>{
        this.tokenService.token = res.token as string;
        this.router.navigate(['photovoltaique']);
      },
      error: (err)=>{
        if(err.error.validationErrors) {
          this.errorMsg = err.error.validationErrors
        } else{
          this.errorMsg.push(err.error.error)
        }
      }
      })
  }
}
