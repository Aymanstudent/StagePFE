/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { afficherSystemeFixations } from '../fn/systeme-fixation-controller/afficher-systeme-fixations';
import { AfficherSystemeFixations$Params } from '../fn/systeme-fixation-controller/afficher-systeme-fixations';
import { ajouterSystemeFixation } from '../fn/systeme-fixation-controller/ajouter-systeme-fixation';
import { AjouterSystemeFixation$Params } from '../fn/systeme-fixation-controller/ajouter-systeme-fixation';
import { modifierSystemeFixation } from '../fn/systeme-fixation-controller/modifier-systeme-fixation';
import { ModifierSystemeFixation$Params } from '../fn/systeme-fixation-controller/modifier-systeme-fixation';
import { supprimerSystemeFixation } from '../fn/systeme-fixation-controller/supprimer-systeme-fixation';
import { SupprimerSystemeFixation$Params } from '../fn/systeme-fixation-controller/supprimer-systeme-fixation';
import { SystemeFixation } from '../models/systeme-fixation';

@Injectable({ providedIn: 'root' })
export class SystemeFixationControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `modifierSystemeFixation()` */
  static readonly ModifierSystemeFixationPath = '/systemefixation/modifier';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `modifierSystemeFixation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierSystemeFixation$Response(params: ModifierSystemeFixation$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return modifierSystemeFixation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `modifierSystemeFixation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierSystemeFixation(params: ModifierSystemeFixation$Params, context?: HttpContext): Observable<string> {
    return this.modifierSystemeFixation$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `ajouterSystemeFixation()` */
  static readonly AjouterSystemeFixationPath = '/systemefixation/ajouter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ajouterSystemeFixation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterSystemeFixation$Response(params: AjouterSystemeFixation$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return ajouterSystemeFixation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ajouterSystemeFixation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterSystemeFixation(params: AjouterSystemeFixation$Params, context?: HttpContext): Observable<string> {
    return this.ajouterSystemeFixation$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `afficherSystemeFixations()` */
  static readonly AfficherSystemeFixationsPath = '/systemefixation/afficher/tout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `afficherSystemeFixations()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherSystemeFixations$Response(params?: AfficherSystemeFixations$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SystemeFixation>>> {
    return afficherSystemeFixations(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `afficherSystemeFixations$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherSystemeFixations(params?: AfficherSystemeFixations$Params, context?: HttpContext): Observable<Array<SystemeFixation>> {
    return this.afficherSystemeFixations$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SystemeFixation>>): Array<SystemeFixation> => r.body)
    );
  }

  /** Path part for operation `supprimerSystemeFixation()` */
  static readonly SupprimerSystemeFixationPath = '/systemefixation/supprimer/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `supprimerSystemeFixation()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerSystemeFixation$Response(params: SupprimerSystemeFixation$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return supprimerSystemeFixation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `supprimerSystemeFixation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerSystemeFixation(params: SupprimerSystemeFixation$Params, context?: HttpContext): Observable<string> {
    return this.supprimerSystemeFixation$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
