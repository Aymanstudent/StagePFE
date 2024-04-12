/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { afficherOnduleurs } from '../fn/onduleur-controller/afficher-onduleurs';
import { AfficherOnduleurs$Params } from '../fn/onduleur-controller/afficher-onduleurs';
import { ajouterOnduleur } from '../fn/onduleur-controller/ajouter-onduleur';
import { AjouterOnduleur$Params } from '../fn/onduleur-controller/ajouter-onduleur';
import { modifierOnduleur } from '../fn/onduleur-controller/modifier-onduleur';
import { ModifierOnduleur$Params } from '../fn/onduleur-controller/modifier-onduleur';
import { Onduleur } from '../models/onduleur';
import { supprimerOnduleur } from '../fn/onduleur-controller/supprimer-onduleur';
import { SupprimerOnduleur$Params } from '../fn/onduleur-controller/supprimer-onduleur';

@Injectable({ providedIn: 'root' })
export class OnduleurControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `modifierOnduleur()` */
  static readonly ModifierOnduleurPath = '/onduleur/modifier';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `modifierOnduleur()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierOnduleur$Response(params: ModifierOnduleur$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return modifierOnduleur(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `modifierOnduleur$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierOnduleur(params: ModifierOnduleur$Params, context?: HttpContext): Observable<string> {
    return this.modifierOnduleur$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `ajouterOnduleur()` */
  static readonly AjouterOnduleurPath = '/onduleur/ajouter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ajouterOnduleur()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterOnduleur$Response(params: AjouterOnduleur$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return ajouterOnduleur(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ajouterOnduleur$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterOnduleur(params: AjouterOnduleur$Params, context?: HttpContext): Observable<string> {
    return this.ajouterOnduleur$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `afficherOnduleurs()` */
  static readonly AfficherOnduleursPath = '/onduleur/afficher/tout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `afficherOnduleurs()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherOnduleurs$Response(params?: AfficherOnduleurs$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Onduleur>>> {
    return afficherOnduleurs(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `afficherOnduleurs$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherOnduleurs(params?: AfficherOnduleurs$Params, context?: HttpContext): Observable<Array<Onduleur>> {
    return this.afficherOnduleurs$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Onduleur>>): Array<Onduleur> => r.body)
    );
  }

  /** Path part for operation `supprimerOnduleur()` */
  static readonly SupprimerOnduleurPath = '/onduleur/supprimer/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `supprimerOnduleur()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerOnduleur$Response(params: SupprimerOnduleur$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return supprimerOnduleur(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `supprimerOnduleur$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerOnduleur(params: SupprimerOnduleur$Params, context?: HttpContext): Observable<string> {
    return this.supprimerOnduleur$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
