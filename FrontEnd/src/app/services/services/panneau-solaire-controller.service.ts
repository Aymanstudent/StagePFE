/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { afficherPanneaux } from '../fn/panneau-solaire-controller/afficher-panneaux';
import { AfficherPanneaux$Params } from '../fn/panneau-solaire-controller/afficher-panneaux';
import { ajouterPanneau } from '../fn/panneau-solaire-controller/ajouter-panneau';
import { AjouterPanneau$Params } from '../fn/panneau-solaire-controller/ajouter-panneau';
import { grouperParModele } from '../fn/panneau-solaire-controller/grouper-par-modele';
import { GrouperParModele$Params } from '../fn/panneau-solaire-controller/grouper-par-modele';
import { modifierPanneau } from '../fn/panneau-solaire-controller/modifier-panneau';
import { ModifierPanneau$Params } from '../fn/panneau-solaire-controller/modifier-panneau';
import { PanneauSolaire } from '../models/panneau-solaire';
import { supprimerPanneau } from '../fn/panneau-solaire-controller/supprimer-panneau';
import { SupprimerPanneau$Params } from '../fn/panneau-solaire-controller/supprimer-panneau';

@Injectable({ providedIn: 'root' })
export class PanneauSolaireControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `modifierPanneau()` */
  static readonly ModifierPanneauPath = '/panneausolaire/modifier';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `modifierPanneau()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierPanneau$Response(params: ModifierPanneau$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return modifierPanneau(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `modifierPanneau$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierPanneau(params: ModifierPanneau$Params, context?: HttpContext): Observable<string> {
    return this.modifierPanneau$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `ajouterPanneau()` */
  static readonly AjouterPanneauPath = '/panneausolaire/ajouter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ajouterPanneau()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterPanneau$Response(params: AjouterPanneau$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return ajouterPanneau(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ajouterPanneau$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ajouterPanneau(params: AjouterPanneau$Params, context?: HttpContext): Observable<string> {
    return this.ajouterPanneau$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `afficherPanneaux()` */
  static readonly AfficherPanneauxPath = '/panneausolaire/afficher/tout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `afficherPanneaux()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherPanneaux$Response(params?: AfficherPanneaux$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PanneauSolaire>>> {
    return afficherPanneaux(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `afficherPanneaux$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  afficherPanneaux(params?: AfficherPanneaux$Params, context?: HttpContext): Observable<Array<PanneauSolaire>> {
    return this.afficherPanneaux$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PanneauSolaire>>): Array<PanneauSolaire> => r.body)
    );
  }

  /** Path part for operation `grouperParModele()` */
  static readonly GrouperParModelePath = '/panneausolaire/afficher/count';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `grouperParModele()` instead.
   *
   * This method doesn't expect any request body.
   */
  grouperParModele$Response(params?: GrouperParModele$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<{
}>>> {
    return grouperParModele(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `grouperParModele$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  grouperParModele(params?: GrouperParModele$Params, context?: HttpContext): Observable<Array<{
}>> {
    return this.grouperParModele$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<{
}>>): Array<{
}> => r.body)
    );
  }

  /** Path part for operation `supprimerPanneau()` */
  static readonly SupprimerPanneauPath = '/panneausolaire/supprimer/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `supprimerPanneau()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerPanneau$Response(params: SupprimerPanneau$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return supprimerPanneau(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `supprimerPanneau$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerPanneau(params: SupprimerPanneau$Params, context?: HttpContext): Observable<string> {
    return this.supprimerPanneau$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
