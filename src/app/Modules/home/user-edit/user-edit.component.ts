import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { userDetails } from '../../../../Shared/Models/userDetails/userDetails';
import { User } from '../../../../Shared/Models/Users/user';
import { UsersService } from '../../../../Shared/Services/User/users.service';
import Swal from 'sweetalert2'
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  
/* State */
user:userDetails;
@ViewChild("personalInfo") personalInfo;
@ViewChild("AboutData") AboutData;
@ViewChild("GalleryPhotos") GalleryPhotos;
userForm:FormGroup;
galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];

/* uiState */
isLoading:boolean=true;
isUserUpdated:boolean=false;
open: boolean = true;
dismissible: boolean = true;
timeout: number = 100000000000;


@HostListener('window:beforeunload') unloadNotification(){
  if (this.userForm.dirty) {
    Swal.fire({
      title: 'Are you sure want to move?',
      text: 'your changes will be lost!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
      // when yes
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // when no 

      }
    });
    
  } 
}

  constructor(
    private activatedRoute:ActivatedRoute,
    private userService:UsersService,
    private builder :FormBuilder,
    private toastr:ToastrService,
    private modalService: NgbModal,
    private http :HttpClient,
    private SpinnerService: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.getUserDetails();
    this.updateUserFormValidators();
    this.setUserFormData();
  }

getUserDetails(){
 const id = this.activatedRoute.snapshot.paramMap.get("id");
 this.SpinnerService.show();  
  this.userService.GetUserById(id).subscribe(
    (res:any)=>{ this.user=res;},
    ()=>{},
    ()=>{ 
      this.handleGalleryOptions();
      this.galleryImages=this.initializeGalleryImages();
      console.log(this.galleryImages)
      this.isLoading=false;
      this.SpinnerService.hide();  
   }
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

openUpdateAboutData(){
  this.setUserFormData();
  this.openVerticallyCenteredmd(this.AboutData);
}

openUpdateGalleryPhotos(){
  this.setUserFormData();
  this.openVerticallyCenteredmd(this.GalleryPhotos);
}

updateUserDetails(){

 this.isUserUpdated=true;
  console.log("userupdate form", this.userForm.value)
   this.userService.UpdateUser(this.userForm.value).subscribe(
    (res)=>{
      this.toastr.success("User Updated Successfully")
      this.userForm.reset(this.userForm.value);
      this.modalService.dismissAll("Cross click");
    },
    ()=>{},
    ()=>{ this.isUserUpdated=false;}
  );
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

handleGalleryOptions(){
  this.galleryOptions = [
    {
      width: '300px',
      height: '200px',
      thumbnailsColumns: 4,
      imageAnimation: NgxGalleryAnimation.Slide,
      preview: false
    },
    // max-width 400
    {
      breakpoint: 400,
     
    }
  ];

 }

 initializeGalleryImages():NgxGalleryImage[]{
  const images=[];
  this.user.photoDto?.forEach(p => {
    images.push(
       {
         small:p.url,
         medium:p.url,
         big:p.url,
       }
     )
   });
   //test
   images.push(

    {
      small:"https://media.istockphoto.com/photos/young-handsome-man-with-beard-wearing-casual-sweater-and-glasses-over-picture-id1212960962?k=20&m=1212960962&s=612x612&w=0&h=o2PGY4yhn51XSnYi60dMCQqvXQ0d-odkaKUVocbYYLk=",
      medium:"https://media.istockphoto.com/photos/young-handsome-man-with-beard-wearing-casual-sweater-and-glasses-over-picture-id1212960962?k=20&m=1212960962&s=612x612&w=0&h=o2PGY4yhn51XSnYi60dMCQqvXQ0d-odkaKUVocbYYLk=",
      big:"https://media.istockphoto.com/photos/young-handsome-man-with-beard-wearing-casual-sweater-and-glasses-over-picture-id1212960962?k=20&m=1212960962&s=612x612&w=0&h=o2PGY4yhn51XSnYi60dMCQqvXQ0d-odkaKUVocbYYLk=",
    },
    {
      small:".../../../../assets/images/small/img-1.jpg",
      medium:".../../../../assets/images/small/img-1.jpg",
      big:".../../../../assets/images/small/img-1.jpg",
    },
    {
      small:".../../../../assets/images/small/img-1.jpg",
      medium:".../../../../assets/images/small/img-1.jpg",
      big:".../../../../assets/images/small/img-1.jpg",
    },
    {
      small:".../../../../assets/images/small/img-1.jpg",
      medium:".../../../../assets/images/small/img-1.jpg",
      big:".../../../../assets/images/small/img-1.jpg",
    },
    {
      small:".../../../../assets/images/small/img-1.jpg",
      medium:".../../../../assets/images/small/img-1.jpg",
      big:".../../../../assets/images/small/img-1.jpg",
    }
   )
   return images;
 }

 
clearData() {
  this.userForm.reset();
  this.modalService.dismissAll("Cross click");
}

}
