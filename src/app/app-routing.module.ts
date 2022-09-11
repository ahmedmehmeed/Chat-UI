import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '../authentication/error/error.component';
import { LoginComponent } from '../authentication/login/login.component';
import { RegisterComponent } from '../authentication/register/register.component';
import { LayoutComponent } from '../Shared/Components/layout/layout.component';
import { appRoutes } from '../Shared/Helpers/app/appRoutes';
import { AuthGuard } from '../Shared/Helpers/guards/auth.guard';
import { content } from "../Shared/Routes/loadingModules";

const routes: Routes = [
  {
    path: appRoutes.Authentication.login.main,
    component: LoginComponent,
    pathMatch: "full",
  },

  {
    path: appRoutes.Authentication.register.main,
    component: RegisterComponent,
    pathMatch: "full",
  },
   {
    path: "",
    component: LoginComponent,
  }, 
 {
    path: "",
    component: LayoutComponent,
    children: content,
    canActivate: [AuthGuard],
  }, 
  {
    path: "**",
    component: ErrorComponent,
    pathMatch: "full",
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
