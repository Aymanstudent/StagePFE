/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EvenementChantier } from '../../models/evenement-chantier';

export interface AfficherPlanif$Params {
  id: number;
}

export function afficherPlanif(http: HttpClient, rootUrl: string, params: AfficherPlanif$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EvenementChantier>>> {
  const rb = new RequestBuilder(rootUrl, afficherPlanif.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<EvenementChantier>>;
    })
  );
}

afficherPlanif.PATH = '/jour_travailler/afficher/{id}';
