import { Component, Input, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { chatMessage } from '../../../../Shared/Models/Messages/chatMessage';
import { message } from '../../../../Shared/Models/Messages/sendMessage';
import { userDetails } from '../../../../Shared/Models/userDetails/userDetails';
import { ChatService } from '../../../../Shared/Services/Message/chat.service';
import {Clipboard} from '@angular/cdk/clipboard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(
    private chatService:ChatService,
    private SpinnerService: NgxSpinnerService,
    private toastr:ToastrService,
    private clipboard: Clipboard,
    private router :Router
    ) { }
  /*   ui */
  isLoading:boolean=true;
  isMessageSend:boolean=false;


  @Input() userDetails:userDetails;
  @Input() messageContent : string ;
  @Input() Messages:chatMessage[][] ;
  @Input() messageDeleted:chatMessage ;
  messageModel:message;


  ngOnInit(): void {
    this.GetMessageThread();
  }


sendMessage(){
this.messageModel={
  receiverUsername:this.userDetails.userName,
  content:this.messageContent
}
this.chatService.sendMessage(this.messageModel).subscribe(
  ()=>{
   this.messageContent='' 
  }
)

}

GetMessageThread(){
  this.SpinnerService.show(); 
  this.chatService.getMessagesThread(this.userDetails.userName).subscribe(
    (res:any)=>{
      this.Messages=res;
      console.log(this.Messages)
    },
    ()=>{},
    ()=>{ 
       this.SpinnerService.hide();
       }
  )
  
  }

deleteMessage(id:string){
    this.chatService.deleteMessage(id).subscribe(
      ()=>{
      
      }
    )
    
    }

deleteMessagesThread(){
      this.chatService.deleteMessagesThread(this.userDetails.id).subscribe(
        ()=>{
        
        }
      )
      
      }
copyMessageToClipboard(message:string){
  this.clipboard.copy(message);
}


}
