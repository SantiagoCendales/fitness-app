import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // GET ROUTE
    const routes = this.router.url.split('/');
    const principalRoute = '/' + routes[1];

    // GET TOKEN
    const authToken = localStorage.getItem('authToken');
    // VALIDATE TOKEN
    if (principalRoute !== 'login' && principalRoute !== 'login') {
      if (authToken) {

        // ADD AUTORIZATION HEADER
        const newRequest = request.clone({ headers: request.headers.set('Authorization', `Bearer ${authToken}`) });
        return next.handle(newRequest);
      } else {
        return next.handle(request);
      }
    }
  }
}
