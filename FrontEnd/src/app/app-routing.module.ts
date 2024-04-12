import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PhotovoltaiqueComponent} from "./stock/photovoltaique/photovoltaique.component";
import {PanneauSolaireComponent} from "./stock/panneau-solaire/panneau-solaire.component";
import {CreerDevisComponent} from "./devis/creer-devis/creer-devis.component";
import {OnduleurComponent} from "./stock/onduleur/onduleur.component";
import {ListeChantierComponent} from "./chantier/liste-chantier/liste-chantier.component";
import {SuiviChantierComponent} from "./chantier/suivi-chantier/suivi-chantier.component";
import {SuiviDemandeDevisComponent} from "./devis/suivi-demande-devis/suivi-demande-devis.component";
import {SuiviClientComponent} from "./client/suivi-client/suivi-client.component";
import {SuiviOuvrierComponent} from "./ouvrier/suivi-ouvrier/suivi-ouvrier.component";
import {PlanifierChantierComponent} from "./planifier/planifier-chantier/planifier-chantier.component";
import {SuiviDevisComponent} from "./devis/suivi-devis/suivi-devis.component";
import {ProfileComponent} from "./user/profile/profile.component";
import {MyApplicationComponent} from "./my-application/my-application.component";
import {HomeComponent} from "./welcome/home/home.component";
import {PlanifierTechnicienComponent} from "./planifier/planifier-technicien/planifier-technicien.component";
import {SuiviFournisseurComponent} from "./fournisseur/suivi-fournisseur/suivi-fournisseur.component";
import {LoginComponent} from "./login-register/login/login.component";
const routes: Routes = [
  {path:"photovoltaique", component: MyApplicationComponent,
    children : [
      {path:"devis/cree", component:CreerDevisComponent},
      {path:"devis/demande/suivi",component:SuiviDemandeDevisComponent},
      {path:"panneaux solaire", component:PanneauSolaireComponent},
      {path:"view-onduleur", component:OnduleurComponent},
      {path:"planifier/chantier", component:PlanifierChantierComponent},
      {path:"chantier", component:ListeChantierComponent},
      {path:"chantier/suivi", component: SuiviChantierComponent},
      {path:"devis/suivi", component:SuiviDevisComponent},
      {path:"client/suivi", component:SuiviClientComponent},
      {path:"ouvrier/suivi", component:SuiviOuvrierComponent},
      {path:"user", component: ProfileComponent},
      {path:"planifier/ouvrier", component: PlanifierTechnicienComponent},
      {path:"fournisseur/suivi", component: SuiviFournisseurComponent}
    ]
  },
  {path:"", component: HomeComponent},
  {path:"login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
