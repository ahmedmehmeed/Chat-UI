import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../../Shared/Components/sidebar/sidebar.component';
import { LayoutComponent } from '../../../Shared/Components/layout/layout.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
