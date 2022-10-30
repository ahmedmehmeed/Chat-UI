import { Component, OnInit } from '@angular/core';
import { LocalStorageKeys } from '../Shared/Helpers/app/LocalStorageKeys';
import { PresenceService } from '../Shared/Services/User/presence.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
constructor(
  private presence:PresenceService
  ){

  }

  ngOnInit(): void {
    this.presence.createHubConnection(localStorage.getItem(LocalStorageKeys.JWT))
  }
  
  title = 'Chat-UI';
}
