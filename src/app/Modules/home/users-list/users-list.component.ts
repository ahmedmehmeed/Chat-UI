import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../Shared/Services/User/users.service';
import { User } from '../../../../Shared/Models/Users/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private userService :UsersService ,     private toastr:ToastrService) { }
  /*   State */
    Users:User[];

   /*  UI */
   isLoading:boolean=true;

  ngOnInit(): void {
    this.getUsers();
  }


  getUsers(){
    this.userService.GetAllUsers().subscribe(
      (res)=>{
         this.Users=res
         console.log(this.Users)
      },
      (err)=> {}, 
      ()=>this.isLoading=false
    )
  }
}
