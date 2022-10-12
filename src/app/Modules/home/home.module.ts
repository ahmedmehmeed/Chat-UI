import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { SharedModule } from '../sharedModule/shared.module';
import { UserEditComponent } from './user-edit/user-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    UserDetailsComponent,
    UsersListComponent,
    UserCardComponent,
    UserEditComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxGalleryModule,
    NgxSpinnerModule,
    PaginationModule.forRoot(),
    NgSelectModule
  ]
})
export class HomeModule { }
