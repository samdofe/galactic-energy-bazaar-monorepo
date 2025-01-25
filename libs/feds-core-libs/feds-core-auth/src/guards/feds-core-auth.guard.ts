import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FedsCoreAuthStore } from '../feds-core-auth.store';

export const authGuard: CanActivateFn = (route, state) => {
  const authStore = inject(FedsCoreAuthStore);
  const router = inject(Router);

  const token = authStore.token();

  if (token) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};