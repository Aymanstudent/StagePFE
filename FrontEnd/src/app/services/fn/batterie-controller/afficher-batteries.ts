/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Batterie } from '../../models/batterie';

export interface AfficherBatteries$Params {
}

export function afficherBatteries(http: HttpClient, rootUrl: string, params?: AfficherBatteries$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Batterie>>> {
  const rb = new RequestBuilder(rootUrl, afficherBatteries.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Batterie>>;
    })
  );
}

afficherBatteries.PATH = '/batterie/afficher/tout';
