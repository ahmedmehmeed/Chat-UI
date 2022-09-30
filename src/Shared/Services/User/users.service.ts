import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiRoutes } from '../../Helpers/app/apiRoutes';
import { User } from '../../Models/Users/user';
import { userDetails } from '../../Models/userDetails/userDetails';
import { delay, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = environment.apiUrl;

  //Store state 
  Users : User[]=[];
  constructor(private http:HttpClient) { }

  GetAllUsers(){ 
    //of make users return as obseervable
    if(this.Users.length>0) return of(this.Users)
    return this.http.get<User[]>(this.apiUrl+ApiRoutes.user.users).pipe(
      map((res)=>{
      this.Users=res
      return res;
      })
    );
  }

  GetUserById(id:string){
    return this.http.get<userDetails>(this.apiUrl+ApiRoutes.user.userDetails+id)
  }

  UpdateUser(User:any){
    return this.http.post<userDetails>(this.apiUrl+ApiRoutes.user.userUpdate,User)
  }


  DeleteUser(id:string){
     this.http.delete(this.apiUrl+ApiRoutes.user.userDelete+id);
  }




}
