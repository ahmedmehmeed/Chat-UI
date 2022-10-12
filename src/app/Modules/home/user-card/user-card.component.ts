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
defaultImage="../../../../assets/images/defaultimg.jpg"
MainImage:any;
  constructor(private Router:Router) { }

  ngOnInit(): void {
    this.initMainImage();
  }

showUserDetails(user:User){
this.Router.navigate(['home/user/'+user.id])
}

initMainImage(){
 this.MainImage = this.user.photos.filter(p=>p.isMain==true)
}



}
