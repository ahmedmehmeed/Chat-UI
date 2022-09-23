import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from '../../../Shared/Helpers/app/appRoutes';
import { AuthGuard } from '../../../Shared/Helpers/guards/auth.guard';
import { SharedModule } from '../sharedModule/shared.module';
import { TestComponent } from './test/test.component';
import { UserDetailsComponent } from './user-details/user-details.component';
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
        canActivate: [AuthGuard]
      },
      {
        path: 'test',
        component: TestComponent,
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
