/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { afficherVehicules } from '../fn/vehicule-controller/afficher-vehicules';
import { AfficherVehicules$Params } from '../fn/vehicule-controller/afficher-vehicules';
import { Vehicule } from '../models/vehicule';

@Injectable({ providedIn: 'root' })
export class VehiculeControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `afficherVehicules()` */
  static readonly AfficherVehiculesPath = '/vehicule/afficher/tout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `afficherVehicules()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherVehicules$Response(params?: AfficherVehicules$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Vehicule>>> {
    return afficherVehicules(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `afficherVehicules$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherVehicules(params?: AfficherVehicules$Params, context?: HttpContext): Observable<Array<Vehicule>> {
    return this.afficherVehicules$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Vehicule>>): Array<Vehicule> => r.body)
    );
  }

}
