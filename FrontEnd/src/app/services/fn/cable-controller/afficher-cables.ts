/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Cable } from '../../models/cable';

export interface AfficherCables$Params {
}

export function afficherCables(http: HttpClient, rootUrl: string, params?: AfficherCables$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Cable>>> {
  const rb = new RequestBuilder(rootUrl, afficherCables.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Cable>>;
    })
  );
}

afficherCables.PATH = '/cable/afficher/tout';
