import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
