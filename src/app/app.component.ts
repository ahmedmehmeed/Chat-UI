import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocalStorageKeys } from '../Shared/Helpers/app/LocalStorageKeys';
import { PresenceService } from '../Shared/Services/User/presence.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
constructor(
  private presence:PresenceService
  ){

  }

  ngOnInit(): void {
    if(localStorage.getItem(LocalStorageKeys.JWT)){   this.presence.createHubConnection(localStorage.getItem(LocalStorageKeys.JWT))}
 
  }
  
  title = 'Chat-UI';

  ngOnDestroy(): void {
   /* this.presence.stopHubConnection();  */
  }

}
