/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Customer } from '../../models/customer';

export interface AddCustomer$Params {
      body: Customer
}

export function addCustomer(http: HttpClient, rootUrl: string, params: AddCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<Customer>> {
  const rb = new RequestBuilder(rootUrl, addCustomer.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Customer>;
    })
  );
}

addCustomer.PATH = '/customer/add';
