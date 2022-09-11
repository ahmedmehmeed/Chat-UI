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
import { loginResponse } from '../../Models/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogedIn=new BehaviorSubject<boolean>(false);


  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient,private router : Router){ }

login(login:login){
  console.log("hereeeeeeeee")
return this.http.post(this.apiUrl+ApiRoutes.account.login,login).pipe(
  tap((res:any)=>{
    if(res.isSuccess){
      localStorage.setItem(LocalStorageKeys.JWT,res.token)
      this.router.navigate(['']);
    }
  })
)
}

logout(){
  this.setLogedIn(false)
  localStorage.removeItem(LocalStorageKeys.JWT)
}

setLogedIn(isLogedIn:boolean){
this.isLogedIn.next(isLogedIn);
}

getLogedIn(): BehaviorSubject<boolean>{
  return this.isLogedIn;
  }

}
