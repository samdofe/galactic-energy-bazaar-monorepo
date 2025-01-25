import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFedsCoreAuthCredential, IFedsCoreAuthMe, IFedsCoreAuthToken } from './feds-core-auth.model';

const { API_AUTH_DOMAIN, API_AUTH_CONTEXT } = process.env;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly #http = inject(HttpClient);
  private readonly apiBase =  `${API_AUTH_DOMAIN}${API_AUTH_CONTEXT}`;

  login(credentials: IFedsCoreAuthCredential): Observable<IFedsCoreAuthToken> {
    return this.#http.post<IFedsCoreAuthToken>(`${this.apiBase}/login`, credentials);
  }

  getUserInfo(): Observable<IFedsCoreAuthMe> {
    return this.#http.get<IFedsCoreAuthMe>(`${this.apiBase}/me`);
  }
}
