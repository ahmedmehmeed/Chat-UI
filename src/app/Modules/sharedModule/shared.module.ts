import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../../Shared/Components/sidebar/sidebar.component';
import { LayoutComponent } from '../../../Shared/Components/layout/layout.component';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AlertModule, AlertConfig } from 'ngx-bootstrap/alert';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    SidebarComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot({positionClass:'toast-bottom-right'}),
    TabsModule.forRoot(),
    AlertModule.forRoot(),
    NgxSpinnerModule,
  ],
  exports:[
    TabsModule,
    ToastrModule,
    AlertModule,
    NgxSpinnerModule,
  ]
})
export class SharedModule { }
