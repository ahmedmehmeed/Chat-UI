import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageKeys } from '../app/LocalStorageKeys';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const Jwt = localStorage.getItem(LocalStorageKeys.JWT)
    if(Jwt)
    {
      request=request.clone(
        {
          setHeaders:{
            Authorization: 'Bearer ' + Jwt
          }
        }
      )
    }
    return next.handle(request);
  }
}
