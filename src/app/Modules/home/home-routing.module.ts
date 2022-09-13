import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from '../../../Shared/Helpers/app/appRoutes';
import { AuthGuard } from '../../../Shared/Helpers/guards/auth.guard';
import { UnauthGuard } from '../../../Shared/Helpers/guards/unauth.guard';
import { SharedModule } from '../sharedModule/shared.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: appRoutes.home.sub,
        component: UserComponent,
        pathMatch: "full",
        canActivate: [AuthGuard]
      },
      {
        path: appRoutes.home.userDetails.main,
        component: UserDetailsComponent,
        pathMatch: "full",
        canActivate: [AuthGuard]
      }

    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
