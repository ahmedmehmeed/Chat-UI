import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiRoutes } from '../../Helpers/app/apiRoutes';
import { User } from '../../Models/Users/user';
import { userDetails } from '../../Models/userDetails/userDetails';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }

  GetAllUsers(){ 
    return this.http.get<User[]>(this.apiUrl+ApiRoutes.user.users);
  }

  GetUserById(id:string){
    return this.http.get<userDetails>(this.apiUrl+ApiRoutes.user.userDetails+id);
  }

  UpdateUser(User:any){
     this.http.put(this.apiUrl+ApiRoutes.user.userUpdate,User); 
  }


  DeleteUser(id:string){
     this.http.delete(this.apiUrl+ApiRoutes.user.userDelete+id);
  }

}
