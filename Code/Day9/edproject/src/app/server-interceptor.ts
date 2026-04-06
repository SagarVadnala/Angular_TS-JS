import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './services/auth-service';

export const serverInterceptor: HttpInterceptorFn = (req, next) => {
  let authService = inject(AuthService);

  req = req.clone({
    setHeaders: { "Content-Type": "application/json" }
  })
  if (authService.currentUser) {
    req = req.clone({
      setHeaders: {
        "Authorization": `Bearer ${authService.currentUser.token}`
      }
    })
  }
  return next(req);
};
