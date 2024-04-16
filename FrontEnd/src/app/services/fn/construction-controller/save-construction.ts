/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Construction } from '../../models/construction';

export interface SaveConstruction$Params {
      body: Construction
}

export function saveConstruction(http: HttpClient, rootUrl: string, params: SaveConstruction$Params, context?: HttpContext): Observable<HttpResponse<Construction> & {
  readonly body: Construction
}> {
  const rb = new RequestBuilder(rootUrl, saveConstruction.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Construction>;
    })
  );
}

saveConstruction.PATH = '/constructor/add';
