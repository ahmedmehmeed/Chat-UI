import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiRoutes } from '../../Helpers/app/apiRoutes';
import { message } from '../../Models/Messages/sendMessage';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }

  sendMessage(model:message){
  return this.http.post(this.apiUrl+ApiRoutes.message.sendMessage,model)
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
