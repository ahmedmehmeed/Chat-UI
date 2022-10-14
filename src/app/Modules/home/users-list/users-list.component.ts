import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../Shared/Services/User/users.service';
import { User } from '../../../../Shared/Models/Users/user';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { userFilter } from '../../../../Shared/Models/Users/userFilter';
import { Pagination } from '../../../../Shared/Models/pagination';
import { LocalStorageKeys } from '../../../../Shared/Helpers/app/LocalStorageKeys';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(
    private userService :UsersService,
    private toastr:ToastrService,
    private spinner: NgxSpinnerService ,
    private SpinnerService: NgxSpinnerService
    ) { }
  /*   State */
    Users:User[];
    userFilter:userFilter={
      pageNumber:1,
      pageSize:50,
      minAge:25,
      maxAge:70
    };

    usersPagination:Pagination;

   /*  UI */
   isLoading:boolean=true;



  ngOnInit(): void {
    this.getUsers();
    this.spinner.show();
   
  }


  getUsers(){
    if(this.userFilter.pageSize<0)this.userFilter.pageSize=50;
    const userId = localStorage.getItem(LocalStorageKeys.UserId)
    this.SpinnerService.show(); 
    this.userService.GetAllUsers(this.userFilter).subscribe(
      (res)=>{
         this.Users=res.body.filter(u=>u.id!=userId)
          this.usersPagination=JSON.parse( res.headers.get("pagination")); 
         console.log(this.Users)
         console.log(this.usersPagination)

      },
      (err)=> {}, 
      ()=>{
        this.isLoading=false
        this.SpinnerService.hide();  
      }
      
    )
  }

  pagedChanged(){
    this.getUsers();
  }
}
