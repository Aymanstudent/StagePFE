/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { afficherFactures } from '../fn/facture-controller/afficher-factures';
import { AfficherFactures$Params } from '../fn/facture-controller/afficher-factures';
import { afficherParChantier } from '../fn/facture-controller/afficher-par-chantier';
import { AfficherParChantier$Params } from '../fn/facture-controller/afficher-par-chantier';
import { ajouterFacture } from '../fn/facture-controller/ajouter-facture';
import { AjouterFacture$Params } from '../fn/facture-controller/ajouter-facture';
import { Facture } from '../models/facture';

@Injectable({ providedIn: 'root' })
export class FactureControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `ajouterFacture()` */
  static readonly AjouterFacturePath = '/facture/ajouter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ajouterFacture()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterFacture$Response(params: AjouterFacture$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return ajouterFacture(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ajouterFacture$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterFacture(params: AjouterFacture$Params, context?: HttpContext): Observable<string> {
    return this.ajouterFacture$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `afficherFactures()` */
  static readonly AfficherFacturesPath = '/facture/afficher/tout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `afficherFactures()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherFactures$Response(params?: AfficherFactures$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Facture>>> {
    return afficherFactures(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `afficherFactures$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherFactures(params?: AfficherFactures$Params, context?: HttpContext): Observable<Array<Facture>> {
    return this.afficherFactures$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Facture>>): Array<Facture> => r.body)
    );
  }

  /** Path part for operation `afficherParChantier()` */
  static readonly AfficherParChantierPath = '/facture/afficher/chantier/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `afficherParChantier()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherParChantier$Response(params: AfficherParChantier$Params, context?: HttpContext): Observable<StrictHttpResponse<Facture>> {
    return afficherParChantier(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `afficherParChantier$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherParChantier(params: AfficherParChantier$Params, context?: HttpContext): Observable<Facture> {
    return this.afficherParChantier$Response(params, context).pipe(
      map((r: StrictHttpResponse<Facture>): Facture => r.body)
    );
  }

}
