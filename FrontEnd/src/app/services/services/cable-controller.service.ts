/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { afficherCables } from '../fn/cable-controller/afficher-cables';
import { AfficherCables$Params } from '../fn/cable-controller/afficher-cables';
import { ajouterCable } from '../fn/cable-controller/ajouter-cable';
import { AjouterCable$Params } from '../fn/cable-controller/ajouter-cable';
import { Cable } from '../models/cable';
import { modifierCable } from '../fn/cable-controller/modifier-cable';
import { ModifierCable$Params } from '../fn/cable-controller/modifier-cable';
import { supprimerCable } from '../fn/cable-controller/supprimer-cable';
import { SupprimerCable$Params } from '../fn/cable-controller/supprimer-cable';

@Injectable({ providedIn: 'root' })
export class CableControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `modifierCable()` */
  static readonly ModifierCablePath = '/cable/modifier';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `modifierCable()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierCable$Response(params: ModifierCable$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return modifierCable(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `modifierCable$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierCable(params: ModifierCable$Params, context?: HttpContext): Observable<string> {
    return this.modifierCable$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `ajouterCable()` */
  static readonly AjouterCablePath = '/cable/ajouter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ajouterCable()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterCable$Response(params: AjouterCable$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return ajouterCable(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ajouterCable$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterCable(params: AjouterCable$Params, context?: HttpContext): Observable<string> {
    return this.ajouterCable$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `afficherCables()` */
  static readonly AfficherCablesPath = '/cable/afficher/tout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `afficherCables()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherCables$Response(params?: AfficherCables$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Cable>>> {
    return afficherCables(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `afficherCables$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherCables(params?: AfficherCables$Params, context?: HttpContext): Observable<Array<Cable>> {
    return this.afficherCables$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Cable>>): Array<Cable> => r.body)
    );
  }

  /** Path part for operation `supprimerCable()` */
  static readonly SupprimerCablePath = '/cable/supprimer/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `supprimerCable()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerCable$Response(params: SupprimerCable$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return supprimerCable(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `supprimerCable$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerCable(params: SupprimerCable$Params, context?: HttpContext): Observable<string> {
    return this.supprimerCable$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
