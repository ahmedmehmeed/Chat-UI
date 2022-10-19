import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiRoutes } from '../../Helpers/app/apiRoutes';

@Injectable({
  providedIn: 'root'
})
export class FollowService {
  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  followUser(FollowedId:string){
    return this.http.get<any>(this.apiUrl+ApiRoutes.follow.followUser+FollowedId)
  }
  
  getfollow(predicate:string){
    return this.http.get<any>(this.apiUrl+ApiRoutes.follow.getFollow+predicate)
  }


}
