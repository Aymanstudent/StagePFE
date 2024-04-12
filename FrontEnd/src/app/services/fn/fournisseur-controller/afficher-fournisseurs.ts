/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Fournisseur } from '../../models/fournisseur';

export interface AfficherFournisseurs$Params {
}

export function afficherFournisseurs(http: HttpClient, rootUrl: string, params?: AfficherFournisseurs$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Fournisseur>>> {
  const rb = new RequestBuilder(rootUrl, afficherFournisseurs.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Fournisseur>>;
    })
  );
}

afficherFournisseurs.PATH = '/fournisseur/afficher/tout';
