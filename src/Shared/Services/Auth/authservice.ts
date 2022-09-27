import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ApiRoutes } from '../../Helpers/app/apiRoutes';
import { appRoutes } from '../../Helpers/app/appRoutes';
import { LocalStorageKeys } from '../../Helpers/app/LocalStorageKeys';
import{login} from '../../Models/Auth/Login'
import{register} from '../../Models/Auth/register'
import { loginResponse } from '../../Models/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogedIn=new BehaviorSubject<boolean>(this.isTokenAvailable());
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient,private router : Router){ }

login(login:login){
return this.http.post(this.apiUrl+ApiRoutes.account.login,login).pipe(
  tap((res:any)=>{
    if(res.isSuccess){
      localStorage.setItem(LocalStorageKeys.JWT,res.token)
      localStorage.setItem(LocalStorageKeys.UserId,res.userId)
      this.setLogedIn(true)
      console.log(this.isLogedIn.value)
      this.router.navigate([appRoutes.home.full]);
    }
  })
)
}

register(register:register){
return this.http.post(this.apiUrl+ApiRoutes.account.register,register).pipe(
  tap((res:any)=>{
    if(res.isSuccess){
      localStorage.setItem(LocalStorageKeys.JWT,res.token)
      this.setLogedIn(true)
      this.router.navigate([appRoutes.home.full]);
    }
  })
)
}

logout(){
  this.setLogedIn(false)
  localStorage.removeItem(LocalStorageKeys.JWT)
  this.router.navigate([appRoutes.Authentication.login.main]);

}

setLogedIn(isLogedIn:boolean){
this.isLogedIn.next(isLogedIn);
}

getLogedIn(): BehaviorSubject<boolean>{
  return this.isLogedIn;
  }

  private isTokenAvailable(): boolean {
    return !!localStorage.getItem(LocalStorageKeys.JWT);
  }

}
