/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DemandeDevis } from '../../models/demande-devis';

export interface AfficherTout1$Params {
}

export function afficherTout1(http: HttpClient, rootUrl: string, params?: AfficherTout1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<DemandeDevis>>> {
  const rb = new RequestBuilder(rootUrl, afficherTout1.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<DemandeDevis>>;
    })
  );
}

afficherTout1.PATH = '/demande/afficher/tout';
