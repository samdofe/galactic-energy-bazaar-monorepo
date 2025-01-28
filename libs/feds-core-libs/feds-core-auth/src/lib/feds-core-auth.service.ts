import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFedsCoreAuthCredentials, IFedsCoreAuthMe, IFedsCoreAuthToken } from './feds-core-auth.model';
import { FedsCoreEnvSyncService } from '@feds/core-env';

@Injectable({
  providedIn: 'root',
})
export class FedsCoreAuthService {
  readonly #http = inject(HttpClient);
  readonly #envSrv = inject(FedsCoreEnvSyncService);
  readonly #environment = this.#envSrv.environment();
  readonly #apiAuthDomain = this.#environment().API_AUTH_DOMAIN;
  readonly #apiAuthContext= this.#environment().API_AUTH_CONTEXT;
  readonly #apiBase =  `${this.#apiAuthDomain}${this.#apiAuthContext}`;

  login(credentials: IFedsCoreAuthCredentials): Observable<IFedsCoreAuthToken> {
    return this.#http.post<IFedsCoreAuthToken>(`${this.#apiBase}/login`, credentials);
  }

  fetchMe(): Observable<IFedsCoreAuthMe> {
    return this.#http.get<IFedsCoreAuthMe>(`${this.#apiBase}/me`);
  }
}
