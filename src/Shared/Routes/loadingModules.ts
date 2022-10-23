import { Routes } from "@angular/router";
import { appRoutes } from "../Helpers/app/appRoutes";

export const content: Routes = [
    {
        path: appRoutes.home.full,
        loadChildren: () => import("../../app/Modules/home/home.module").then((m) => m.HomeModule),

 
        
     },
     {
        path: appRoutes.MembersChat.full,
        loadChildren: () => import("../../app/Modules/members-chat/members-chat.module").then((m) => m.MembersChatModule),
     }
];
