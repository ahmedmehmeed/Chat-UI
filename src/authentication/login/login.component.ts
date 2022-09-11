import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../Shared/Services/Auth/authservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
/*   UI */

isloggedIn:boolean=false;


  constructor( 
    private authService:AuthService,
    private formBuilder: FormBuilder
    ) { }



  ngOnInit(): void {
    this.initForms();
    this.initIslogedIn();
  }

  
  LoginForm: FormGroup ;


  initForms(){
  this.initloginForm();
  }

  initIslogedIn(){
    this.authService.getLogedIn().subscribe(
      (res:any)=>{
         this.isloggedIn=res;
      }
    )
  }

  initloginForm(){
   this.LoginForm=this.formBuilder.group({
    email:[''],
    password:['']
  })  
  }

  get loginControls(){
    return this.LoginForm.controls;
  }

  
  login(){
    console.log("this.LoginForm.value",this.LoginForm.value)
   this.authService.login(this.LoginForm.value).subscribe(
    (res)=>{
      this.isloggedIn=true;
      console.log(res)
    }
   )
  }



  logout(){
  this.authService.logout();
  }


}
