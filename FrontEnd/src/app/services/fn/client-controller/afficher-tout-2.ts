/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Client } from '../../models/client';

export interface AfficherTout2$Params {
}

export function afficherTout2(http: HttpClient, rootUrl: string, params?: AfficherTout2$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Client>>> {
  const rb = new RequestBuilder(rootUrl, afficherTout2.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Client>>;
    })
  );
}

afficherTout2.PATH = '/client/afficher/tout';
