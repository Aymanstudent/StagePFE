/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { afficherOuvriers } from '../fn/ouvrier-controller/afficher-ouvriers';
import { AfficherOuvriers$Params } from '../fn/ouvrier-controller/afficher-ouvriers';
import { ajouterOuvrier } from '../fn/ouvrier-controller/ajouter-ouvrier';
import { AjouterOuvrier$Params } from '../fn/ouvrier-controller/ajouter-ouvrier';
import { modifierOuvrier } from '../fn/ouvrier-controller/modifier-ouvrier';
import { ModifierOuvrier$Params } from '../fn/ouvrier-controller/modifier-ouvrier';
import { Ouvrier } from '../models/ouvrier';
import { supprimerOuvrier } from '../fn/ouvrier-controller/supprimer-ouvrier';
import { SupprimerOuvrier$Params } from '../fn/ouvrier-controller/supprimer-ouvrier';

@Injectable({ providedIn: 'root' })
export class OuvrierControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `modifierOuvrier()` */
  static readonly ModifierOuvrierPath = '/ouvrier/modifier';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `modifierOuvrier()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierOuvrier$Response(params: ModifierOuvrier$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return modifierOuvrier(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `modifierOuvrier$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierOuvrier(params: ModifierOuvrier$Params, context?: HttpContext): Observable<string> {
    return this.modifierOuvrier$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `ajouterOuvrier()` */
  static readonly AjouterOuvrierPath = '/ouvrier/ajouter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ajouterOuvrier()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterOuvrier$Response(params: AjouterOuvrier$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return ajouterOuvrier(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ajouterOuvrier$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterOuvrier(params: AjouterOuvrier$Params, context?: HttpContext): Observable<string> {
    return this.ajouterOuvrier$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `afficherOuvriers()` */
  static readonly AfficherOuvriersPath = '/ouvrier/afficher/tout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `afficherOuvriers()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherOuvriers$Response(params?: AfficherOuvriers$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Ouvrier>>> {
    return afficherOuvriers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `afficherOuvriers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherOuvriers(params?: AfficherOuvriers$Params, context?: HttpContext): Observable<Array<Ouvrier>> {
    return this.afficherOuvriers$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Ouvrier>>): Array<Ouvrier> => r.body)
    );
  }

  /** Path part for operation `supprimerOuvrier()` */
  static readonly SupprimerOuvrierPath = '/ouvrier/supprimer/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `supprimerOuvrier()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerOuvrier$Response(params: SupprimerOuvrier$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return supprimerOuvrier(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `supprimerOuvrier$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerOuvrier(params: SupprimerOuvrier$Params, context?: HttpContext): Observable<string> {
    return this.supprimerOuvrier$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
