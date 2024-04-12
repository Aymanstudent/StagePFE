/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { envoier } from '../fn/email-sender-controller/envoier';
import { Envoier$Params } from '../fn/email-sender-controller/envoier';

@Injectable({ providedIn: 'root' })
export class EmailSenderControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `envoier()` */
  static readonly EnvoierPath = '/mail/envoier';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `envoier()` instead.
   *
   * This method doesn't expect any request body.
   */
  envoier$Response(params: Envoier$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return envoier(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `envoier$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  envoier(params: Envoier$Params, context?: HttpContext): Observable<string> {
    return this.envoier$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
