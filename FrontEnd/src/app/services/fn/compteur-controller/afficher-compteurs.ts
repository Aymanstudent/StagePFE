/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Compteur } from '../../models/compteur';

export interface AfficherCompteurs$Params {
}

export function afficherCompteurs(http: HttpClient, rootUrl: string, params?: AfficherCompteurs$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Compteur>>> {
  const rb = new RequestBuilder(rootUrl, afficherCompteurs.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Compteur>>;
    })
  );
}

afficherCompteurs.PATH = '/compteur/afficher/tout';
