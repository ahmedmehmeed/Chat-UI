import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
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
galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];

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
      ()=>{
        this.handleGalleryOptions();
        this.galleryImages=this.initializeGalleryImages();
        console.log(this.galleryImages)
        this.isLoading=false;
       }
    )
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
  this.userDetails.photoDto?.forEach(p => {
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

}
