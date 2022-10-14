import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from '../../../Shared/Helpers/app/appRoutes';
import { AuthGuard } from '../../../Shared/Helpers/guards/auth.guard';
import { UnsavedChangesGuard } from '../../../Shared/Helpers/guards/unsaved-changes.guard';
import { SharedModule } from '../sharedModule/shared.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: appRoutes.home.sub,
        component: UsersListComponent,
        pathMatch: "full",
        canActivate: [AuthGuard]
      },
      {
        path: appRoutes.home.userDetails.main,
        component: UserDetailsComponent,
        pathMatch: "full",
        canActivate: [AuthGuard],
    
      },
      {
        path: appRoutes.home.userEdit.main,
        component: UserEditComponent,
        pathMatch: "full",
        canActivate: [AuthGuard],
        /* canDeactivate:[UnsavedChangesGuard] */
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
