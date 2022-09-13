import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../Services/Auth/authservice';
import { appRoutes } from '../app/appRoutes';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private authService : AuthService,private router :Router){


}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isloggedIn ;
      isloggedIn= this.authService.getLogedIn().value
      if(isloggedIn)
           return true;

    this.router.navigate([appRoutes.Authentication.login.main]);
           return false;     
  }
  
}
