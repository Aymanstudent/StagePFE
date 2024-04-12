/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { afficher } from '../fn/demande-controller/afficher';
import { Afficher$Params } from '../fn/demande-controller/afficher';
import { afficherTout1 } from '../fn/demande-controller/afficher-tout-1';
import { AfficherTout1$Params } from '../fn/demande-controller/afficher-tout-1';
import { ajouterDemande } from '../fn/demande-controller/ajouter-demande';
import { AjouterDemande$Params } from '../fn/demande-controller/ajouter-demande';
import { DemandeDevis } from '../models/demande-devis';
import { modifierDemande } from '../fn/demande-controller/modifier-demande';
import { ModifierDemande$Params } from '../fn/demande-controller/modifier-demande';
import { supprimerDemande } from '../fn/demande-controller/supprimer-demande';
import { SupprimerDemande$Params } from '../fn/demande-controller/supprimer-demande';
import { supprimerTout1 } from '../fn/demande-controller/supprimer-tout-1';
import { SupprimerTout1$Params } from '../fn/demande-controller/supprimer-tout-1';

@Injectable({ providedIn: 'root' })
export class DemandeControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `modifierDemande()` */
  static readonly ModifierDemandePath = '/demande/modifier';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `modifierDemande()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierDemande$Response(params: ModifierDemande$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return modifierDemande(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `modifierDemande$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierDemande(params: ModifierDemande$Params, context?: HttpContext): Observable<string> {
    return this.modifierDemande$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `ajouterDemande()` */
  static readonly AjouterDemandePath = '/demande/ajouter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ajouterDemande()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterDemande$Response(params: AjouterDemande$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return ajouterDemande(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ajouterDemande$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterDemande(params: AjouterDemande$Params, context?: HttpContext): Observable<string> {
    return this.ajouterDemande$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `afficher()` */
  static readonly AfficherPath = '/demande/afficher/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `afficher()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficher$Response(params: Afficher$Params, context?: HttpContext): Observable<StrictHttpResponse<DemandeDevis>> {
    return afficher(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `afficher$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficher(params: Afficher$Params, context?: HttpContext): Observable<DemandeDevis> {
    return this.afficher$Response(params, context).pipe(
      map((r: StrictHttpResponse<DemandeDevis>): DemandeDevis => r.body)
    );
  }

  /** Path part for operation `afficherTout1()` */
  static readonly AfficherTout1Path = '/demande/afficher/tout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `afficherTout1()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherTout1$Response(params?: AfficherTout1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DemandeDevis>>> {
    return afficherTout1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `afficherTout1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherTout1(params?: AfficherTout1$Params, context?: HttpContext): Observable<Array<DemandeDevis>> {
    return this.afficherTout1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<DemandeDevis>>): Array<DemandeDevis> => r.body)
    );
  }

  /** Path part for operation `supprimerDemande()` */
  static readonly SupprimerDemandePath = '/demande/supprimer/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `supprimerDemande()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerDemande$Response(params: SupprimerDemande$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return supprimerDemande(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `supprimerDemande$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerDemande(params: SupprimerDemande$Params, context?: HttpContext): Observable<string> {
    return this.supprimerDemande$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `supprimerTout1()` */
  static readonly SupprimerTout1Path = '/demande/supprimer/tout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `supprimerTout1()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerTout1$Response(params?: SupprimerTout1$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return supprimerTout1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `supprimerTout1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerTout1(params?: SupprimerTout1$Params, context?: HttpContext): Observable<string> {
    return this.supprimerTout1$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
