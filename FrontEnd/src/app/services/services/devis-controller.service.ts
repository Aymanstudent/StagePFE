/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { afficherDevis } from '../fn/devis-controller/afficher-devis';
import { AfficherDevis$Params } from '../fn/devis-controller/afficher-devis';
import { afficherTout } from '../fn/devis-controller/afficher-tout';
import { AfficherTout$Params } from '../fn/devis-controller/afficher-tout';
import { ajouterDevis } from '../fn/devis-controller/ajouter-devis';
import { AjouterDevis$Params } from '../fn/devis-controller/ajouter-devis';
import { Devis } from '../models/devis';
import { modifierDevis } from '../fn/devis-controller/modifier-devis';
import { ModifierDevis$Params } from '../fn/devis-controller/modifier-devis';
import { supprimerDevis } from '../fn/devis-controller/supprimer-devis';
import { SupprimerDevis$Params } from '../fn/devis-controller/supprimer-devis';
import { supprimerTout } from '../fn/devis-controller/supprimer-tout';
import { SupprimerTout$Params } from '../fn/devis-controller/supprimer-tout';

@Injectable({ providedIn: 'root' })
export class DevisControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `modifierDevis()` */
  static readonly ModifierDevisPath = '/devis/modifier';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `modifierDevis()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierDevis$Response(params: ModifierDevis$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return modifierDevis(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `modifierDevis$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierDevis(params: ModifierDevis$Params, context?: HttpContext): Observable<string> {
    return this.modifierDevis$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `ajouterDevis()` */
  static readonly AjouterDevisPath = '/devis/ajouter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ajouterDevis()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterDevis$Response(params: AjouterDevis$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return ajouterDevis(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ajouterDevis$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterDevis(params: AjouterDevis$Params, context?: HttpContext): Observable<string> {
    return this.ajouterDevis$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `afficherDevis()` */
  static readonly AfficherDevisPath = '/devis/afficher/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `afficherDevis()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherDevis$Response(params: AfficherDevis$Params, context?: HttpContext): Observable<StrictHttpResponse<Devis>> {
    return afficherDevis(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `afficherDevis$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherDevis(params: AfficherDevis$Params, context?: HttpContext): Observable<Devis> {
    return this.afficherDevis$Response(params, context).pipe(
      map((r: StrictHttpResponse<Devis>): Devis => r.body)
    );
  }

  /** Path part for operation `afficherTout()` */
  static readonly AfficherToutPath = '/devis/afficher/tout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `afficherTout()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherTout$Response(params?: AfficherTout$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Devis>>> {
    return afficherTout(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `afficherTout$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherTout(params?: AfficherTout$Params, context?: HttpContext): Observable<Array<Devis>> {
    return this.afficherTout$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Devis>>): Array<Devis> => r.body)
    );
  }

  /** Path part for operation `supprimerDevis()` */
  static readonly SupprimerDevisPath = '/devis/supprimer/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `supprimerDevis()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerDevis$Response(params: SupprimerDevis$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return supprimerDevis(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `supprimerDevis$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerDevis(params: SupprimerDevis$Params, context?: HttpContext): Observable<string> {
    return this.supprimerDevis$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `supprimerTout()` */
  static readonly SupprimerToutPath = '/devis/supprimer/tout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `supprimerTout()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerTout$Response(params?: SupprimerTout$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return supprimerTout(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `supprimerTout$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerTout(params?: SupprimerTout$Params, context?: HttpContext): Observable<string> {
    return this.supprimerTout$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
