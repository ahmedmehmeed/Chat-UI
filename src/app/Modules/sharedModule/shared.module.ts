import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../../Shared/Components/sidebar/sidebar.component';
import { LayoutComponent } from '../../../Shared/Components/layout/layout.component';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AlertModule, AlertConfig } from 'ngx-bootstrap/alert';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgSelectModule } from '@ng-select/ng-select';
import { TimeagoModule } from 'ngx-timeago';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSliderModule } from "@angular/material/slider";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



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
    NgxDropzoneModule,
    NgSelectModule,
    TimeagoModule.forRoot(),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSliderModule,
    NgbModule
   
  ],
  exports:[
    TabsModule,
    ToastrModule,
    AlertModule,
    NgxSpinnerModule,
    NgxDropzoneModule,
    NgSelectModule,
    TimeagoModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSliderModule,
    NgbModule
 

  ]
})
export class SharedModule { }
