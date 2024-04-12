/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { afficherPlanif } from '../fn/evenement-chantier-controller/afficher-planif';
import { AfficherPlanif$Params } from '../fn/evenement-chantier-controller/afficher-planif';
import { afficherToutPlanif } from '../fn/evenement-chantier-controller/afficher-tout-planif';
import { AfficherToutPlanif$Params } from '../fn/evenement-chantier-controller/afficher-tout-planif';
import { ajouterJourTravailler } from '../fn/evenement-chantier-controller/ajouter-jour-travailler';
import { AjouterJourTravailler$Params } from '../fn/evenement-chantier-controller/ajouter-jour-travailler';
import { ajouterJourTravailler1 } from '../fn/evenement-chantier-controller/ajouter-jour-travailler-1';
import { AjouterJourTravailler1$Params } from '../fn/evenement-chantier-controller/ajouter-jour-travailler-1';
import { ajouterJourTravailler2 } from '../fn/evenement-chantier-controller/ajouter-jour-travailler-2';
import { AjouterJourTravailler2$Params } from '../fn/evenement-chantier-controller/ajouter-jour-travailler-2';
import { EvenementChantier } from '../models/evenement-chantier';
import { modifierEvenementChantier } from '../fn/evenement-chantier-controller/modifier-evenement-chantier';
import { ModifierEvenementChantier$Params } from '../fn/evenement-chantier-controller/modifier-evenement-chantier';

@Injectable({ providedIn: 'root' })
export class EvenementChantierControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `modifierEvenementChantier()` */
  static readonly ModifierEvenementChantierPath = '/jour_travailler/modifier';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `modifierEvenementChantier()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierEvenementChantier$Response(params: ModifierEvenementChantier$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return modifierEvenementChantier(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `modifierEvenementChantier$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierEvenementChantier(params: ModifierEvenementChantier$Params, context?: HttpContext): Observable<string> {
    return this.modifierEvenementChantier$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `ajouterJourTravailler()` */
  static readonly AjouterJourTravaillerPath = '/jour_travailler/ajouter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ajouterJourTravailler()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterJourTravailler$Response(params: AjouterJourTravailler$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return ajouterJourTravailler(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ajouterJourTravailler$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterJourTravailler(params: AjouterJourTravailler$Params, context?: HttpContext): Observable<string> {
    return this.ajouterJourTravailler$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `afficherPlanif()` */
  static readonly AfficherPlanifPath = '/jour_travailler/afficher/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `afficherPlanif()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherPlanif$Response(params: AfficherPlanif$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EvenementChantier>>> {
    return afficherPlanif(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `afficherPlanif$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherPlanif(params: AfficherPlanif$Params, context?: HttpContext): Observable<Array<EvenementChantier>> {
    return this.afficherPlanif$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<EvenementChantier>>): Array<EvenementChantier> => r.body)
    );
  }

  /** Path part for operation `afficherToutPlanif()` */
  static readonly AfficherToutPlanifPath = '/jour_travailler/afficher/tout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `afficherToutPlanif()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherToutPlanif$Response(params?: AfficherToutPlanif$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EvenementChantier>>> {
    return afficherToutPlanif(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `afficherToutPlanif$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherToutPlanif(params?: AfficherToutPlanif$Params, context?: HttpContext): Observable<Array<EvenementChantier>> {
    return this.afficherToutPlanif$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<EvenementChantier>>): Array<EvenementChantier> => r.body)
    );
  }

  /** Path part for operation `ajouterJourTravailler1()` */
  static readonly AjouterJourTravailler1Path = '/jour_travailler/supprimer/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ajouterJourTravailler1()` instead.
   *
   * This method doesn't expect any request body.
   */
  ajouterJourTravailler1$Response(params: AjouterJourTravailler1$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return ajouterJourTravailler1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ajouterJourTravailler1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ajouterJourTravailler1(params: AjouterJourTravailler1$Params, context?: HttpContext): Observable<string> {
    return this.ajouterJourTravailler1$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `ajouterJourTravailler2()` */
  static readonly AjouterJourTravailler2Path = '/jour_travailler/supprimer/tout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ajouterJourTravailler2()` instead.
   *
   * This method doesn't expect any request body.
   */
  ajouterJourTravailler2$Response(params?: AjouterJourTravailler2$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return ajouterJourTravailler2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ajouterJourTravailler2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ajouterJourTravailler2(params?: AjouterJourTravailler2$Params, context?: HttpContext): Observable<string> {
    return this.ajouterJourTravailler2$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
