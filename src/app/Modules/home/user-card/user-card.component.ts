import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../../Shared/Models/Users/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
@Input() user:User
  constructor(private Router:Router) { }

  ngOnInit(): void {
  }

showUserDetails(user:User){
this.Router.navigate(['home/user/'+user.id])
}



}
