/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Inverter } from '../../models/inverter';

export interface GetInverters$Params {
}

export function getInverters(http: HttpClient, rootUrl: string, params?: GetInverters$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Inverter>>> {
  const rb = new RequestBuilder(rootUrl, getInverters.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Inverter>>;
    })
  );
}

getInverters.PATH = '/inverter/get';
