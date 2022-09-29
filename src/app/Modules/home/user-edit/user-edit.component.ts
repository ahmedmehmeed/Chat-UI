import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
@ViewChild("personalInfo") personalInfo;
userForm:FormGroup;

/* uiState */
isLoading:boolean=true;
isUserUpdated:boolean=false;

  constructor(
    private activatedRoute:ActivatedRoute,
    private userService:UsersService,
    private builder :FormBuilder,
    private toastr:ToastrService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.getUserDetails();
    this.updateUserFormValidators();
  }

getUserDetails(){
 const id = this.activatedRoute.snapshot.paramMap.get("id");
  this.userService.GetUserById(id).subscribe(
    (res:any)=>{ this.user=res;},
    ()=>{},
    ()=>{ this.isLoading=false}
  )
}

updateUserFormValidators(){
this.userForm=this.builder.group({
  id: ["",[Validators.required]],
  firstName: ["",[Validators.required]],
  lastName: ["",[Validators.required]],
  birthDate: ["",[Validators.required]],
  knownAs: ["",[Validators.required]],
  email: ["",[Validators.required,Validators.email]],
  gender: ["",[Validators.required]],
  introduction: ["",[Validators.required]],
  lookingFor: ["",[Validators.required]],
  interests: ["",[Validators.required]],
  city: ["",[Validators.required]],
  country: ["",[Validators.required]],
  photoDto: ["",[Validators.required]],
})
}

get getUpdateUserFormControls():any{
return this.userForm.controls;
}

setUserFormData(){
  this.userForm.patchValue({
    id:this.user.id,
    firstName:this.user.firstName,
    lastName:this.user.lastName,
    birthDate:this.user.birthDate,
    knownAs:this.user.knownAs,
    email:this.user.email,
    gender:this.user.gender,
    introduction:this.user.introduction,
    lookingFor:this.user.lookingFor,
    interests:this.user.interests,
    city:this.user.city,
    country:this.user.country,
    photoDto:this.user.photoDto,
  })
}


openUpdatePersonalData() {
  this.setUserFormData();
  this.openVerticallyCenteredmd(this.personalInfo);
  console.log(this.userForm.value)
}

updateUserDetails(){
  console.log("userupdate form", this.userForm.value)
this.userService.UpdateUser(this.userForm.validator)
}


openVerticallyCenteredmd(content){
  this.modalService.open(content, {
    centered: true,
    size: "md",
    scrollable: true,
  });
}

openVerticallyCenteredLg(content){
  this.modalService.open(content, {
    centered: true,
    size: "lg",
    scrollable: true,
  });
}

clearData() {
  this.modalService.dismissAll("Cross click");
}

}
