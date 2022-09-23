import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userDetails } from '../../../../Shared/Models/userDetails/userDetails';
import { UsersService } from '../../../../Shared/Services/User/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
 /*  State */
  userDetails:userDetails

/*   ui */
isLoading:boolean=true;

  constructor(private activeRoute:ActivatedRoute,private userService:UsersService) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(){
   const userId=this.activeRoute.snapshot.paramMap.get('id')
    this.userService.GetUserById(userId).subscribe(
      (res)=>{
        this.userDetails=res;
        console.log("userDetails",this.userDetails)
      },
      ()=>{},
      ()=>{this.isLoading=false }
    )

  }

}
