import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../Components/sidebar/sidebar.component';
import { LayoutComponent } from '../Components/layout/layout.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
