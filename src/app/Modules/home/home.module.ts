import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { SharedModule } from '../sharedModule/shared.module';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    UserDetailsComponent,
    UsersListComponent,
    UserCardComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
