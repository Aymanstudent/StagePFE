import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListeChantierComponent} from "./chantier/liste-chantier/liste-chantier.component";
import {SuiviChantierComponent} from "./chantier/suivi-chantier/suivi-chantier.component";
import {PlanifierChantierComponent} from "./planifier/planifier-chantier/planifier-chantier.component";
import {ProfileComponent} from "./user/profile/profile.component";
import {MyApplicationComponent} from "./my-application/my-application.component";
import {HomeComponent} from "./welcome/home/home.component";
import {PlanifierTechnicienComponent} from "./planifier/planifier-technicien/planifier-technicien.component";
import {LoginComponent} from "./login-register/login/login.component";
import {SupplierComponent} from "./supplier/supplier.component";
import {WorkerComponent} from "./worker/worker.component";
import {DevisRequestComponent} from "./devis-request/devis-request.component";
import {NewDevisComponent} from "./new-devis/new-devis.component";
import {DevisComponent} from "./devis/devis.component"
import {CustomerComponent} from "./customer/customer.component";
import {SolarPanelComponent} from "./stock/solar-panel/solar-panel.component";
import {InverterComponent} from "./stock/inverter/inverter.component";
import {AcceptDevisComponent} from "./accept-devis/accept-devis.component";
import {NewConstructionComponent} from "./constructor/new-construction/new-construction.component";
import {ViewConstructionComponent} from "./constructor/view-construction/view-construction.component";
import {ViewListConstructionComponent} from "./constructor/view-list-construction/view-list-construction.component";

const routes: Routes = [
  {
    path: "photovoltaique", component: MyApplicationComponent,
    children: [
      {path: "inverter", component: InverterComponent},
      {path: "planifier", component: PlanifierChantierComponent},
      {path: "chantier", component: ListeChantierComponent},
      {path: "chantier/suivi", component: SuiviChantierComponent},
      {path: "customer", component: CustomerComponent},
      {path: "user", component: ProfileComponent},
      {path: "calendrier", component: PlanifierTechnicienComponent},
      {path: "devisRequest", component: DevisRequestComponent},
      {path: "devis/add", component: NewDevisComponent},
      {path: "worker", component: WorkerComponent},
      {path: "supplier", component: SupplierComponent},
      {path: "devis", component: DevisComponent},
      {path: "constructor/add", component: NewConstructionComponent},
      {path: "solarPanel", component: SolarPanelComponent},
      {path: "construction", component: ViewListConstructionComponent}
    ]
  },

  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: `devis/accept/:Id`, component: AcceptDevisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
