/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { afficherBatteries } from '../fn/batterie-controller/afficher-batteries';
import { AfficherBatteries$Params } from '../fn/batterie-controller/afficher-batteries';
import { ajouterBatterie } from '../fn/batterie-controller/ajouter-batterie';
import { AjouterBatterie$Params } from '../fn/batterie-controller/ajouter-batterie';
import { Batterie } from '../models/batterie';
import { modifierBatterie } from '../fn/batterie-controller/modifier-batterie';
import { ModifierBatterie$Params } from '../fn/batterie-controller/modifier-batterie';
import { supprimerBatterie } from '../fn/batterie-controller/supprimer-batterie';
import { SupprimerBatterie$Params } from '../fn/batterie-controller/supprimer-batterie';

@Injectable({ providedIn: 'root' })
export class BatterieControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `modifierBatterie()` */
  static readonly ModifierBatteriePath = '/batterie/modifier';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `modifierBatterie()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierBatterie$Response(params: ModifierBatterie$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return modifierBatterie(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `modifierBatterie$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierBatterie(params: ModifierBatterie$Params, context?: HttpContext): Observable<string> {
    return this.modifierBatterie$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `ajouterBatterie()` */
  static readonly AjouterBatteriePath = '/batterie/ajouter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ajouterBatterie()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterBatterie$Response(params: AjouterBatterie$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return ajouterBatterie(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ajouterBatterie$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterBatterie(params: AjouterBatterie$Params, context?: HttpContext): Observable<string> {
    return this.ajouterBatterie$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `afficherBatteries()` */
  static readonly AfficherBatteriesPath = '/batterie/afficher/tout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `afficherBatteries()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherBatteries$Response(params?: AfficherBatteries$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Batterie>>> {
    return afficherBatteries(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `afficherBatteries$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherBatteries(params?: AfficherBatteries$Params, context?: HttpContext): Observable<Array<Batterie>> {
    return this.afficherBatteries$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Batterie>>): Array<Batterie> => r.body)
    );
  }

  /** Path part for operation `supprimerBatterie()` */
  static readonly SupprimerBatteriePath = '/batterie/supprimer/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `supprimerBatterie()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerBatterie$Response(params: SupprimerBatterie$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return supprimerBatterie(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `supprimerBatterie$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerBatterie(params: SupprimerBatterie$Params, context?: HttpContext): Observable<string> {
    return this.supprimerBatterie$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
