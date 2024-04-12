/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Tache } from '../../models/tache';

export interface AfficherTaches$Params {
}

export function afficherTaches(http: HttpClient, rootUrl: string, params?: AfficherTaches$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Tache>>> {
  const rb = new RequestBuilder(rootUrl, afficherTaches.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Tache>>;
    })
  );
}

afficherTaches.PATH = '/tache/afficher/tout';
