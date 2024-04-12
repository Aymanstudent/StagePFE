/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { afficherClient } from '../fn/client-controller/afficher-client';
import { AfficherClient$Params } from '../fn/client-controller/afficher-client';
import { afficherTout2 } from '../fn/client-controller/afficher-tout-2';
import { AfficherTout2$Params } from '../fn/client-controller/afficher-tout-2';
import { ajouterClient } from '../fn/client-controller/ajouter-client';
import { AjouterClient$Params } from '../fn/client-controller/ajouter-client';
import { Client } from '../models/client';
import { modifierClient } from '../fn/client-controller/modifier-client';
import { ModifierClient$Params } from '../fn/client-controller/modifier-client';
import { supprimerClient } from '../fn/client-controller/supprimer-client';
import { SupprimerClient$Params } from '../fn/client-controller/supprimer-client';
import { supprimerTout2 } from '../fn/client-controller/supprimer-tout-2';
import { SupprimerTout2$Params } from '../fn/client-controller/supprimer-tout-2';

@Injectable({ providedIn: 'root' })
export class ClientControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `modifierClient()` */
  static readonly ModifierClientPath = '/client/modifier';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `modifierClient()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierClient$Response(params: ModifierClient$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return modifierClient(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `modifierClient$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierClient(params: ModifierClient$Params, context?: HttpContext): Observable<string> {
    return this.modifierClient$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `ajouterClient()` */
  static readonly AjouterClientPath = '/client/ajouter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ajouterClient()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterClient$Response(params: AjouterClient$Params, context?: HttpContext): Observable<StrictHttpResponse<Client>> {
    return ajouterClient(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ajouterClient$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterClient(params: AjouterClient$Params, context?: HttpContext): Observable<Client> {
    return this.ajouterClient$Response(params, context).pipe(
      map((r: StrictHttpResponse<Client>): Client => r.body)
    );
  }

  /** Path part for operation `afficherClient()` */
  static readonly AfficherClientPath = '/client/afficher/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `afficherClient()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherClient$Response(params: AfficherClient$Params, context?: HttpContext): Observable<StrictHttpResponse<Client>> {
    return afficherClient(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `afficherClient$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherClient(params: AfficherClient$Params, context?: HttpContext): Observable<Client> {
    return this.afficherClient$Response(params, context).pipe(
      map((r: StrictHttpResponse<Client>): Client => r.body)
    );
  }

  /** Path part for operation `afficherTout2()` */
  static readonly AfficherTout2Path = '/client/afficher/tout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `afficherTout2()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherTout2$Response(params?: AfficherTout2$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Client>>> {
    return afficherTout2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `afficherTout2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherTout2(params?: AfficherTout2$Params, context?: HttpContext): Observable<Array<Client>> {
    return this.afficherTout2$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Client>>): Array<Client> => r.body)
    );
  }

  /** Path part for operation `supprimerClient()` */
  static readonly SupprimerClientPath = '/client/supprimer/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `supprimerClient()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerClient$Response(params: SupprimerClient$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return supprimerClient(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `supprimerClient$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerClient(params: SupprimerClient$Params, context?: HttpContext): Observable<string> {
    return this.supprimerClient$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `supprimerTout2()` */
  static readonly SupprimerTout2Path = '/client/supprimer/tout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `supprimerTout2()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerTout2$Response(params?: SupprimerTout2$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return supprimerTout2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `supprimerTout2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerTout2(params?: SupprimerTout2$Params, context?: HttpContext): Observable<string> {
    return this.supprimerTout2$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
