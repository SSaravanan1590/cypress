import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const redirectGuard: CanActivateFn = () => {
  const router = inject(Router);
  router.navigate(['/home/layouts']);
  return false;
};