import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MailSendService {
  link = "http://localhost:8080/mail/send"
  constructor(private Http: HttpClient) { }

  public send(mail : any):Observable<object>{
    return this.Http.post(this.link, mail)
  }
}
