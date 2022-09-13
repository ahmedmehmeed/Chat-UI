import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../../../Shared/Services/Auth/authservice';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
   this.initRegisterForm();
  }



  /* UI State */
    RegisterForm: FormGroup ;
    
  initRegisterForm(){
    this.RegisterForm=this.formBuilder.group({
      firstName:[''],
      lastName:[''],
      userName:[''],
       email:[''],
      password:['']
   })  
   }
 
   get RegisterControls(){
     return this.RegisterForm.controls;
   }
 
   
   register(){
    console.log("this.RegisterForm.value",this.RegisterForm.value)
    this.authService.register(this.RegisterForm.value).subscribe(
     (res)=>{
       console.log(res)
     }
    )
   }
}
