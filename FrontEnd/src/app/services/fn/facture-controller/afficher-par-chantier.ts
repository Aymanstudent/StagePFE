/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Facture } from '../../models/facture';

export interface AfficherParChantier$Params {
  id: number;
}

export function afficherParChantier(http: HttpClient, rootUrl: string, params: AfficherParChantier$Params, context?: HttpContext): Observable<StrictHttpResponse<Facture>> {
  const rb = new RequestBuilder(rootUrl, afficherParChantier.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Facture>;
    })
  );
}

afficherParChantier.PATH = '/facture/afficher/chantier/{id}';
