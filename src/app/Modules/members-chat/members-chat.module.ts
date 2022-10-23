import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersChatRoutingModule } from './members-chat-routing.module';
import { MessagesModule } from '../messages/messages.module';
import { MemberMessagesComponent } from './member-messages/member-messages.component';



@NgModule({
  declarations: [
   MemberMessagesComponent  
  ],
  imports: [
    CommonModule,
    MembersChatRoutingModule,
    MessagesModule
  ]
})
export class MembersChatModule { }
