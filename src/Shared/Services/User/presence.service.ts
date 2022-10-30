import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import {  ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { loginResponse } from '../../Models/loginResponse';


@Injectable({
  providedIn: 'root'
})
export class PresenceService {
hubUrl=environment.hubUrl;
 public hubConnection:HubConnection
private onlineUsersSource =new BehaviorSubject<string[]>([]);

onlineUser=this.onlineUsersSource.asObservable();

  constructor(private toastr:ToastrService) { }

  createHubConnection(token:string){
     this.hubConnection =new HubConnectionBuilder().withUrl(this.hubUrl+"presence",{
      accessTokenFactory:()=>token
    }).withAutomaticReconnect()
      .build()

     this.hubConnection.start()
                       .catch(err=>{console.log(err)}) 

     this.hubConnection.on("UserIsOnline",username=>{this.toastr.info(username+" Connected")})

     this.hubConnection.on("UserIsOffline",username=>{this.toastr.warning(username+" DisConnected")})
    
     this.hubConnection.on("OlineUsers",(onlineUsersname:string[])=>{
      this.onlineUsersSource.next(onlineUsersname);
      console.log("online",onlineUsersname);
     })


  }

  stopHubConnection(){
    this.hubConnection.stop().catch(err=>console.log(err))
  }
}
