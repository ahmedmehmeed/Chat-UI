import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../Services/Auth/authservice';


@Injectable({
   providedIn: 'root'
})


export class UnauthGuard implements CanActivate {

   constructor(private authService: AuthService, private router: Router) { }

   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      let isloggedIn ;
      isloggedIn= this.authService.getLogedIn().value
      if(!isloggedIn)
           return true;
      this.router.navigate(['']);
      return false;
   }

}
