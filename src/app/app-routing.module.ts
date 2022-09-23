import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Modules/authentication/error/error.component';
import { LoginComponent } from './Modules/authentication/login/login.component';
import { RegisterComponent } from './Modules/authentication/register/register.component';
import { LayoutComponent } from '../Shared/Components/layout/layout.component';
import { appRoutes } from '../Shared/Helpers/app/appRoutes';
import { AuthGuard } from '../Shared/Helpers/guards/auth.guard';
import { UnauthGuard } from '../Shared/Helpers/guards/unauth.guard';
import { content } from "../Shared/Routes/loadingModules";

const routes: Routes = [
  {
    path: appRoutes.Authentication.login.main,
    component: LoginComponent,
     pathMatch: "full",
     canActivate: [UnauthGuard],  
  },

  {
    path: appRoutes.Authentication.register.main,
    component: RegisterComponent,
    pathMatch: "full",
    canActivate: [UnauthGuard],  
  },
   {
    path: "",
    component: LoginComponent,
    canActivate: [AuthGuard],  
  },  
/*   {
    path: appRoutes.home.full,
    loadChildren: () => import("../app/Modules/home/home.module").then((m) => m.HomeModule),
    
  }, */

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
