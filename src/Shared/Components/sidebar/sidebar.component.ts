import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageKeys } from '../../Helpers/app/LocalStorageKeys';
import { User } from '../../Models/Users/user';
import { AuthService } from '../../Services/Auth/authservice';
import { UsersService } from '../../Services/User/users.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
/* state */
userProfile:User;
userId:string;
defaultImage="../../../../assets/images/defaultimg.jpg"
  constructor(  private authService:AuthService,private userService:UsersService,private router :Router) { }

  ngOnInit(): void {
    this.getUserDetails();
  }


  getUserDetails(){
    this.userId=localStorage.getItem(LocalStorageKeys.UserId);
  this.userService.GetUserById(this.userId).subscribe(
    (res:any)=>this.userProfile=res,
  )

  }

  logout(){
    this.authService.logout();
  }

  navigatetoMyProfile(){
   this.router.navigate(['home/editUser/'+this.userId])
  }


}
