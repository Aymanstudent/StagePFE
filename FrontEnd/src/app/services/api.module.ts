/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { SystemeFixationControllerService } from './services/systeme-fixation-controller.service';
import { PanneauSolaireControllerService } from './services/panneau-solaire-controller.service';
import { OuvrierControllerService } from './services/ouvrier-controller.service';
import { OnduleurControllerService } from './services/onduleur-controller.service';
import { EvenementChantierControllerService } from './services/evenement-chantier-controller.service';
import { FournisseurControllerService } from './services/fournisseur-controller.service';
import { DevisControllerService } from './services/devis-controller.service';
import { DemandeControllerService } from './services/demande-controller.service';
import { CompteurControllerService } from './services/compteur-controller.service';
import { ClientControllerService } from './services/client-controller.service';
import { CableControllerService } from './services/cable-controller.service';
import { BatterieControllerService } from './services/batterie-controller.service';
import { EmailSenderControllerService } from './services/email-sender-controller.service';
import { FactureControllerService } from './services/facture-controller.service';
import { ChantierControllerService } from './services/chantier-controller.service';
import { AvenantControllerService } from './services/avenant-controller.service';
import { AuthenticationService } from './services/authentication.service';
import { VehiculeControllerService } from './services/vehicule-controller.service';
import { TacheControllerService } from './services/tache-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    SystemeFixationControllerService,
    PanneauSolaireControllerService,
    OuvrierControllerService,
    OnduleurControllerService,
    EvenementChantierControllerService,
    FournisseurControllerService,
    DevisControllerService,
    DemandeControllerService,
    CompteurControllerService,
    ClientControllerService,
    CableControllerService,
    BatterieControllerService,
    EmailSenderControllerService,
    FactureControllerService,
    ChantierControllerService,
    AvenantControllerService,
    AuthenticationService,
    VehiculeControllerService,
    TacheControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
