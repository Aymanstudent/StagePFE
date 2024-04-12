/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PanneauSolaire } from '../../models/panneau-solaire';

export interface AfficherPanneaux$Params {
}

export function afficherPanneaux(http: HttpClient, rootUrl: string, params?: AfficherPanneaux$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PanneauSolaire>>> {
  const rb = new RequestBuilder(rootUrl, afficherPanneaux.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<PanneauSolaire>>;
    })
  );
}

afficherPanneaux.PATH = '/panneausolaire/afficher/tout';
