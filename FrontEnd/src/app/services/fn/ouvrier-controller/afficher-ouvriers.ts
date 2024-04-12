/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Ouvrier } from '../../models/ouvrier';

export interface AfficherOuvriers$Params {
}

export function afficherOuvriers(http: HttpClient, rootUrl: string, params?: AfficherOuvriers$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Ouvrier>>> {
  const rb = new RequestBuilder(rootUrl, afficherOuvriers.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Ouvrier>>;
    })
  );
}

afficherOuvriers.PATH = '/ouvrier/afficher/tout';
