import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FedsCoreAuthStore } from '../feds-core-auth.store';


export const fedsCoreAuthRoleGuard: CanActivateFn = (route, state) => {
  const authStore = inject(FedsCoreAuthStore);
  const router = inject(Router);

  const user = authStore.me();
  const requiredRoles = route.data?.['roles'] || [];

  if (user && requiredRoles.includes(user.role)) {
    return true;
  } else {
    router.navigate(['/dashboard']);
    return false;
  }
};
