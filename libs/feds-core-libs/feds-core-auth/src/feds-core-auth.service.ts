import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFedsCoreAuthCredentials, IFedsCoreAuthMe, IFedsCoreAuthToken } from './feds-core-auth.model';

@Injectable({
  providedIn: 'root',
})
export class fedsCoreAuthService {
  readonly #http = inject(HttpClient);
  private readonly apiBase =  `${process.env['API_AUTH_DOMAIN']}${process.env['API_AUTH_CONTEXT']}`;

  login(credentials: IFedsCoreAuthCredentials): Observable<IFedsCoreAuthToken> {
    return this.#http.post<IFedsCoreAuthToken>(`${this.apiBase}/login`, credentials);
  }

  fetchMe(): Observable<IFedsCoreAuthMe> {
    return this.#http.get<IFedsCoreAuthMe>(`${this.apiBase}/me`);
  }
}
