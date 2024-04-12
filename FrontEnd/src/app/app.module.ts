import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {StockModule} from "./stock/stock.module";
import {NgxPrintDirective} from "ngx-print";
import {FormsModule} from "@angular/forms";
import {DevisModule} from "./devis/devis.module";
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ChantierModule} from "./chantier/chantier.module";
import {ClientModule} from "./client/client.module";
import {PlanifierModule} from "./planifier/planifier.module";
import {UserModule} from "./user/user.module";
import {OuvrierModule} from "./ouvrier/ouvrier.module";
import {WelcomeModule} from "./welcome/welcome.module";
import { MyApplicationComponent } from './my-application/my-application.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FournisseurModule} from "./fournisseur/fournisseur.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {LoginRegisterModule} from "./login-register/login-register.module";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MyApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StockModule,
    NgxPrintDirective,
    FormsModule,
    DevisModule,
    DragDropModule,
    ChantierModule,
    ClientModule,
    PlanifierModule,
    UserModule,
    OuvrierModule,
    WelcomeModule,
    FournisseurModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginRegisterModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
