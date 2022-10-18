import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../../Shared/Models/Users/user';
import { FollowService } from '../../../../Shared/Services/Follow/follow.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
@Input() user:User
defaultImage="../../../../assets/images/defaultimg.jpg"
MainImage:any;
  constructor(private Router:Router,private followService:FollowService ) { }

  ngOnInit(): void {
    this.initMainImage();
  }

 /*  UI */
 isLoading:boolean=false;

showUserDetails(user:User){
this.Router.navigate(['home/user/'+user.id])
}

initMainImage(){
 this.MainImage = this.user.photos.filter(p=>p.isMain==true)
}

followUser(user:User){
  this.isLoading=false
 this.followService.followUser(user.id).subscribe(
  (res)=>{
  this.isLoading=false
  }
);
}

}
