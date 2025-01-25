import { inject } from '@angular/core';
import { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FedsCoreAuthStore } from '../feds-core-auth.store';

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<any> {
  const authStore = inject(FedsCoreAuthStore);
  const token = authStore.token();

  const clonedRequest = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  return next(clonedRequest);
}
