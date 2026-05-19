import { inject } from '@angular/core';

import {
  CanActivateFn,
  Router
} from '@angular/router';

export const authGuard:
CanActivateFn = () => {

  const router =
  inject(Router);

  const admin =
  localStorage.getItem(
    'admin'
  );

  if(admin == 'true'){

    return true;

  }

  else{

    router.navigate([
      '/login'
    ]);

    return false;

  }

};