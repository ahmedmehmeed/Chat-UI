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
import { PhotoDto } from '../../../../Shared/Models/userDetails/PhotoDto';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  
/* State */
user:userDetails;
photos?: PhotoDto[];
@ViewChild("personalInfo") personalInfo;
@ViewChild("AboutData") AboutData;
@ViewChild("GalleryPhotos") GalleryPhotos;
@ViewChild("profilePhoto") profilePhoto;
userForm:FormGroup;
galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];
files: File[] = [];
userUpdatephotoRes:any;
defaultImage="../../../../assets/images/defaultimg.jpg"

/* uiState */
isLoading:boolean=true;
isUserUpdated:boolean=false;
open: boolean = true;
dismissible: boolean = true;
timeout: number = 100000000000;


/* @HostListener('window:beforeunload') unloadNotification(){
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
} */

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
    (res:any)=>{ 
      this.user=res;
      this.photos=this.user.photoDto.filter(a=>a.isMain!=true)
    },
    ()=>{},
    ()=>{ 
      this.handleGalleryOptions();
      this.galleryImages=this.initializeGalleryImages();
      /* this.initializedropzoneImages(); */
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
  /* photoDto: ["",[Validators.required]], */
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
/*     photoDto:this.user.photoDto, */
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
  this.openVerticallyCenteredLg(this.GalleryPhotos);
}

openUpdateprofilePhoto(){
  this.setUserFormData();
  this.openVerticallyCenteredmd(this.profilePhoto);
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

openUserEditModal(modal:any,type:string){
 switch(type)
 {
  case'DeletePhoto':
  this.openVerticallyCenteredLg(modal);


 }

}

updateUserPhotos(){
  this.isUserUpdated=true;
  let data={
    userId:this.user.id,
    isMain:false
  }
  const formData= new FormData();
/*   formData.append("userId", this.user.id); */
formData.append("photo", this.files[0]);
formData.append("userId",this.user.id);
formData.append("isMain",JSON.stringify(false));
 this.userService.UpdateUserPhoto(formData).subscribe(
  (res)=>{
    this.userUpdatephotoRes=res;
  },
  ()=>{},
  ()=>{
     this.isUserUpdated=false;
      this.clearData()
    }
 )
}

updateUserPhotoProfile(){
  this.isUserUpdated=true;
  let data={
    userId:this.user.id,
    isMain:true
  }
  const formData= new FormData();
/*   formData.append("userId", this.user.id); */
formData.append("photo", this.files[0]);
formData.append("userId",this.user.id);
formData.append("isMain",JSON.stringify(true));
 this.userService.UpdateUserPhoto(formData).subscribe(
  (res)=>{
    this.userUpdatephotoRes=res;
  },
  ()=>{},
  ()=>{
     this.isUserUpdated=false;
      this.clearData()
    }
 )
}

deleteUserPhotos(publicId:string){
  this.isUserUpdated=true;
 this.userService.DeleteUserPhoto(publicId).subscribe(
  (res)=>{
    this.userUpdatephotoRes=res;
    this.photos=this.photos.filter(p=>p.publicId!=publicId)
  },
  ()=>{},
  ()=>{
     this.isUserUpdated=false;
      this.clearData()
    }
 )
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
  this.photos?.forEach(p => {
    images.push(
       {
         small:p.url,
         medium:p.url,
         big:p.url,
       }
     )
   });

   return images;
 }

/*  initializedropzoneImages(){
const files : File[]=[]
this.user.photoDto?.forEach(p => {
  files.push(
     {
       name:p.url,
       size:0,
       lastModified: 0,
       webkitRelativePath:" ",
       type:" ",
       arrayBuffer: undefined,
       slice:undefined,
       stream:undefined,
       text:undefined
     }
   )
 });
 this.files =files;
 } */
 onSelect(event) {
   console.log(event);
   this.files.push(...event.addedFiles);
 }
 
 onRemove(event) {
   console.log(event);
   this.files.splice(this.files.indexOf(event), 1);
 }
 
clearData() {
  this.userForm.reset();
  this.modalService.dismissAll("Cross click");
}

}
