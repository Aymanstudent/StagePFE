/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { afficherAvenantParChantierId } from '../fn/avenant-controller/afficher-avenant-par-chantier-id';
import { AfficherAvenantParChantierId$Params } from '../fn/avenant-controller/afficher-avenant-par-chantier-id';
import { ajouterAvenant } from '../fn/avenant-controller/ajouter-avenant';
import { AjouterAvenant$Params } from '../fn/avenant-controller/ajouter-avenant';
import { Avenant } from '../models/avenant';

@Injectable({ providedIn: 'root' })
export class AvenantControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `ajouterAvenant()` */
  static readonly AjouterAvenantPath = '/avenant/ajouter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ajouterAvenant()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterAvenant$Response(params: AjouterAvenant$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return ajouterAvenant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ajouterAvenant$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterAvenant(params: AjouterAvenant$Params, context?: HttpContext): Observable<string> {
    return this.ajouterAvenant$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `afficherAvenantParChantierId()` */
  static readonly AfficherAvenantParChantierIdPath = '/avenant/afficher/chantier/tout/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `afficherAvenantParChantierId()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherAvenantParChantierId$Response(params: AfficherAvenantParChantierId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Avenant>>> {
    return afficherAvenantParChantierId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `afficherAvenantParChantierId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherAvenantParChantierId(params: AfficherAvenantParChantierId$Params, context?: HttpContext): Observable<Array<Avenant>> {
    return this.afficherAvenantParChantierId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Avenant>>): Array<Avenant> => r.body)
    );
  }

}
