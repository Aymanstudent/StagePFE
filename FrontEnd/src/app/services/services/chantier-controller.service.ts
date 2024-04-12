/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { afficherChantiers } from '../fn/chantier-controller/afficher-chantiers';
import { AfficherChantiers$Params } from '../fn/chantier-controller/afficher-chantiers';
import { ajouterChantier } from '../fn/chantier-controller/ajouter-chantier';
import { AjouterChantier$Params } from '../fn/chantier-controller/ajouter-chantier';
import { Chantier } from '../models/chantier';

@Injectable({ providedIn: 'root' })
export class ChantierControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `ajouterChantier()` */
  static readonly AjouterChantierPath = '/chantier/ajouter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ajouterChantier()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterChantier$Response(params: AjouterChantier$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return ajouterChantier(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ajouterChantier$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterChantier(params: AjouterChantier$Params, context?: HttpContext): Observable<string> {
    return this.ajouterChantier$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `afficherChantiers()` */
  static readonly AfficherChantiersPath = '/chantier/afficher/tout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `afficherChantiers()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherChantiers$Response(params?: AfficherChantiers$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Chantier>>> {
    return afficherChantiers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `afficherChantiers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherChantiers(params?: AfficherChantiers$Params, context?: HttpContext): Observable<Array<Chantier>> {
    return this.afficherChantiers$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Chantier>>): Array<Chantier> => r.body)
    );
  }

}
