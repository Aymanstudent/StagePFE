/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface GrouperParModele$Params {
}

export function grouperParModele(http: HttpClient, rootUrl: string, params?: GrouperParModele$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<{
}>>> {
  const rb = new RequestBuilder(rootUrl, grouperParModele.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<{
      }>>;
    })
  );
}

grouperParModele.PATH = '/panneausolaire/afficher/count';
