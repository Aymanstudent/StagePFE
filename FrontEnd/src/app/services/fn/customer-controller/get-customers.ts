/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Customer } from '../../models/customer';

export interface GetCustomers$Params {
}

export function getCustomers(http: HttpClient, rootUrl: string, params?: GetCustomers$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Customer>>> {
  const rb = new RequestBuilder(rootUrl, getCustomers.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Customer>>;
    })
  );
}

getCustomers.PATH = '/customer/get';
