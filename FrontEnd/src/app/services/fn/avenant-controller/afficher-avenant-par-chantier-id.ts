/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Avenant } from '../../models/avenant';

export interface AfficherAvenantParChantierId$Params {
  id: number;
}

export function afficherAvenantParChantierId(http: HttpClient, rootUrl: string, params: AfficherAvenantParChantierId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Avenant>>> {
  const rb = new RequestBuilder(rootUrl, afficherAvenantParChantierId.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Avenant>>;
    })
  );
}

afficherAvenantParChantierId.PATH = '/avenant/afficher/chantier/tout/{id}';
