import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from '../../../Shared/Helpers/app/appRoutes';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: appRoutes.Authentication.login.main,
        component: LoginComponent,
      },
      {
        path: appRoutes.Authentication.register.main,
        component: RegisterComponent,
      },
      {
        path: appRoutes.Authentication.error.main,
        component: ErrorComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { 


}
