/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { afficherCompteurs } from '../fn/compteur-controller/afficher-compteurs';
import { AfficherCompteurs$Params } from '../fn/compteur-controller/afficher-compteurs';
import { ajouterCompteur } from '../fn/compteur-controller/ajouter-compteur';
import { AjouterCompteur$Params } from '../fn/compteur-controller/ajouter-compteur';
import { Compteur } from '../models/compteur';
import { modifierCompteur } from '../fn/compteur-controller/modifier-compteur';
import { ModifierCompteur$Params } from '../fn/compteur-controller/modifier-compteur';
import { supprimerCompteur } from '../fn/compteur-controller/supprimer-compteur';
import { SupprimerCompteur$Params } from '../fn/compteur-controller/supprimer-compteur';

@Injectable({ providedIn: 'root' })
export class CompteurControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `modifierCompteur()` */
  static readonly ModifierCompteurPath = '/compteur/modifier';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `modifierCompteur()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierCompteur$Response(params: ModifierCompteur$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return modifierCompteur(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `modifierCompteur$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierCompteur(params: ModifierCompteur$Params, context?: HttpContext): Observable<string> {
    return this.modifierCompteur$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `supprimerCompteur()` */
  static readonly SupprimerCompteurPath = '/compteur/supprimer/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `supprimerCompteur()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  supprimerCompteur$Response(params: SupprimerCompteur$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return supprimerCompteur(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `supprimerCompteur$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  supprimerCompteur(params: SupprimerCompteur$Params, context?: HttpContext): Observable<string> {
    return this.supprimerCompteur$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `ajouterCompteur()` */
  static readonly AjouterCompteurPath = '/compteur/ajouter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ajouterCompteur()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterCompteur$Response(params: AjouterCompteur$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return ajouterCompteur(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ajouterCompteur$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterCompteur(params: AjouterCompteur$Params, context?: HttpContext): Observable<string> {
    return this.ajouterCompteur$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `afficherCompteurs()` */
  static readonly AfficherCompteursPath = '/compteur/afficher/tout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `afficherCompteurs()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherCompteurs$Response(params?: AfficherCompteurs$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Compteur>>> {
    return afficherCompteurs(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `afficherCompteurs$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherCompteurs(params?: AfficherCompteurs$Params, context?: HttpContext): Observable<Array<Compteur>> {
    return this.afficherCompteurs$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Compteur>>): Array<Compteur> => r.body)
    );
  }

}
