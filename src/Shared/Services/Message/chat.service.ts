import { formatDate } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ApiRoutes } from '../../Helpers/app/apiRoutes';
import { chatMessage } from '../../Models/Messages/chatMessage';
import { message } from '../../Models/Messages/sendMessage';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = environment.apiUrl;
  private hubUrl=environment.hubUrl;
  public hubConnection:HubConnection 

  private messagesThreadSource=new BehaviorSubject<chatMessage[][]>([]);
  messagesThread$=this.messagesThreadSource.asObservable();

  constructor(private http:HttpClient) { }

 MessageHubConnection(token:string,receiverUsername:string){
  this.hubConnection=new HubConnectionBuilder()
                                     .withUrl(this.hubUrl+"message?user="+receiverUsername,{accessTokenFactory:()=>token})
                                     .withAutomaticReconnect()
                                     .build();
  this.hubConnection.start()
                     .catch(err=>{console.log(err)}) ;
  this.hubConnection.on("GetMessagesThread",Messages=>
  {
    this.messagesThreadSource.next(Messages)
  }) 
  
  this.hubConnection.on("NewMessage",message=>{
   const newMessage:any[]=[] ;
   newMessage.push(message);
   console.log(newMessage);
   this.messagesThread$.subscribe(
    (messages)=>{
      if(messages[messages.length-1][0].dateMessageSent&&messages[messages.length-1][0].dateMessageSent.slice(0,10)==message.dateMessageSent.slice(0,10))
      { 
        messages[messages.length-1].push(message)
        console.log("if",messages)  

 
      }
      else{
        messages.push(newMessage);
        console.log("else",messages) 
      }
      console.log("if",messages[messages.length-1][0].dateMessageSent.toLocaleString())
      console.log("if",message.dateMessageSent.toLocaleString()) 
    })
  })
   /* this.messagesThread$.pipe(take(1)).subscribe(messages=>{
      this.messagesThreadSource.next([...messages[messages.length-1],message])
    })*/

 }

 stopHubConnection(){
  this.hubConnection.stop().catch(err=>console.log(err))
}

//traditional Method 
/*   sendMessage(model:message){
  return this.http.post(this.apiUrl+ApiRoutes.message.sendMessage,model)
  } */

 async sendMessage(model:message){
    return this.hubConnection.invoke("SendMessage",model).catch(err=>console.log(err))
    }
  

  getMessagesThread(userName:string){
    return this.http.get(this.apiUrl+ApiRoutes.message.getMessageThread+userName)
    }

  deleteMessage(id:string){
      return this.http.delete(this.apiUrl+ApiRoutes.message.DeleteMessage+id)
      }


  deleteMessagesThread(id:string){
        return this.http.delete(this.apiUrl+ApiRoutes.message.DeleteMessagesThread+id)
        } 

}
