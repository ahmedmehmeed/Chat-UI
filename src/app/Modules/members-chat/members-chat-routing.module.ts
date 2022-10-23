import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from '../../../Shared/Helpers/app/appRoutes';
import { MemberMessagesComponent } from './member-messages/member-messages.component';
import { AuthGuard } from '../../../Shared/Helpers/guards/auth.guard';
const routes: Routes = [
  {
    path: appRoutes.MembersChat.sub,
    component: MemberMessagesComponent,
    pathMatch: "full",
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersChatRoutingModule { }
