import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { userDetails } from '../../../../Shared/Models/userDetails/userDetails';
import { User } from '../../../../Shared/Models/Users/user';
import { UsersService } from '../../../../Shared/Services/User/users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  
/* State */
user:userDetails;

userForm:FormGroup;

/* uiState */
isLoading:boolean=true;

  constructor(
    private activatedRoute:ActivatedRoute,
    private userService:UsersService,
    private builder :FormBuilder,
    private toastr:ToastrService
    ) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

getUserDetails(){
 const id = this.activatedRoute.snapshot.paramMap.get("id");
  this.userService.GetUserById(id).subscribe(
    (res:any)=>{ this.user=res;},
    ()=>{},
    ()=>{ this.isLoading=false}
  )
}

}
