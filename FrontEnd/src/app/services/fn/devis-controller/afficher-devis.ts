/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Devis } from '../../models/devis';

export interface AfficherDevis$Params {
  id: number;
}

export function afficherDevis(http: HttpClient, rootUrl: string, params: AfficherDevis$Params, context?: HttpContext): Observable<StrictHttpResponse<Devis>> {
  const rb = new RequestBuilder(rootUrl, afficherDevis.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Devis>;
    })
  );
}

afficherDevis.PATH = '/devis/afficher/{id}';
