/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { afficherFournisseurs } from '../fn/fournisseur-controller/afficher-fournisseurs';
import { AfficherFournisseurs$Params } from '../fn/fournisseur-controller/afficher-fournisseurs';
import { ajouterFournisseur } from '../fn/fournisseur-controller/ajouter-fournisseur';
import { AjouterFournisseur$Params } from '../fn/fournisseur-controller/ajouter-fournisseur';
import { Fournisseur } from '../models/fournisseur';
import { modifierFournisseur } from '../fn/fournisseur-controller/modifier-fournisseur';
import { ModifierFournisseur$Params } from '../fn/fournisseur-controller/modifier-fournisseur';
import { supprimerFournisseur } from '../fn/fournisseur-controller/supprimer-fournisseur';
import { SupprimerFournisseur$Params } from '../fn/fournisseur-controller/supprimer-fournisseur';

@Injectable({ providedIn: 'root' })
export class FournisseurControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `modifierFournisseur()` */
  static readonly ModifierFournisseurPath = '/fournisseur/modifier';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `modifierFournisseur()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierFournisseur$Response(params: ModifierFournisseur$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return modifierFournisseur(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `modifierFournisseur$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierFournisseur(params: ModifierFournisseur$Params, context?: HttpContext): Observable<string> {
    return this.modifierFournisseur$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `ajouterFournisseur()` */
  static readonly AjouterFournisseurPath = '/fournisseur/ajouter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ajouterFournisseur()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterFournisseur$Response(params: AjouterFournisseur$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return ajouterFournisseur(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ajouterFournisseur$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterFournisseur(params: AjouterFournisseur$Params, context?: HttpContext): Observable<string> {
    return this.ajouterFournisseur$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `afficherFournisseurs()` */
  static readonly AfficherFournisseursPath = '/fournisseur/afficher/tout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `afficherFournisseurs()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherFournisseurs$Response(params?: AfficherFournisseurs$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Fournisseur>>> {
    return afficherFournisseurs(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `afficherFournisseurs$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherFournisseurs(params?: AfficherFournisseurs$Params, context?: HttpContext): Observable<Array<Fournisseur>> {
    return this.afficherFournisseurs$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Fournisseur>>): Array<Fournisseur> => r.body)
    );
  }

  /** Path part for operation `supprimerFournisseur()` */
  static readonly SupprimerFournisseurPath = '/fournisseur/supprimer/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `supprimerFournisseur()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerFournisseur$Response(params: SupprimerFournisseur$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return supprimerFournisseur(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `supprimerFournisseur$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerFournisseur(params: SupprimerFournisseur$Params, context?: HttpContext): Observable<string> {
    return this.supprimerFournisseur$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
