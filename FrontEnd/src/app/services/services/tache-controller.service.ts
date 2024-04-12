/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { afficherTaches } from '../fn/tache-controller/afficher-taches';
import { AfficherTaches$Params } from '../fn/tache-controller/afficher-taches';
import { Tache } from '../models/tache';

@Injectable({ providedIn: 'root' })
export class TacheControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `afficherTaches()` */
  static readonly AfficherTachesPath = '/tache/afficher/tout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `afficherTaches()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherTaches$Response(params?: AfficherTaches$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Tache>>> {
    return afficherTaches(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `afficherTaches$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherTaches(params?: AfficherTaches$Params, context?: HttpContext): Observable<Array<Tache>> {
    return this.afficherTaches$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Tache>>): Array<Tache> => r.body)
    );
  }

}
