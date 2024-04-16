import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {StockModule} from "./stock/stock.module";
import {NgxPrintDirective} from "ngx-print";
import {FormsModule} from "@angular/forms";
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ChantierModule} from "./chantier/chantier.module";
import {ClientModule} from "./client/client.module";
import {PlanifierModule} from "./planifier/planifier.module";
import {UserModule} from "./user/user.module";
import {WelcomeModule} from "./welcome/welcome.module";
import { MyApplicationComponent } from './my-application/my-application.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {LoginRegisterModule} from "./login-register/login-register.module";
import { SupplierComponent } from './supplier/supplier.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import { WorkerComponent } from './worker/worker.component';
import { NewDevisComponent } from './new-devis/new-devis.component';
import { DevisRequestComponent } from './devis-request/devis-request.component';
import {ConstructionModule} from "./constructor/construction.module";
import { CustomerComponent } from './customer/customer.component';
import { AcceptDevisComponent } from './accept-devis/accept-devis.component';
import {DevisComponent} from "./devis/devis.component";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MyApplicationComponent,
    SupplierComponent,
    WorkerComponent,
    NewDevisComponent,
    DevisRequestComponent,
    CustomerComponent,
    AcceptDevisComponent,
    DevisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StockModule,
    NgxPrintDirective,
    FormsModule,
    DragDropModule,
    ChantierModule,
    ClientModule,
    PlanifierModule,
    UserModule,
    WelcomeModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginRegisterModule,
    MatPaginatorModule,
    MatTableModule,
    ConstructionModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
