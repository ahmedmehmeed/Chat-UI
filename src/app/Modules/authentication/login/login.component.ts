import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PasswordStrengthValidator } from '../../../../Shared/Helpers/validators/password-strength-validator';
import { AuthService } from '../../../../Shared/Services/Auth/authservice';
import { PresenceService } from '../../../../Shared/Services/User/presence.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
/*   UI */

isloggedIn:boolean=false;
isSubmittedlogin:boolean=false;


  constructor( 
    private authService:AuthService,
    private formBuilder: FormBuilder,
    private router:Router,
    private toastr:ToastrService,
    ) { }



  ngOnInit(): void {
    this.initForms();
    this.initIslogedIn();
    this.validation();
/*     this.presence.stopHubConnection(); */
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
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.compose([
      Validators.required, Validators.minLength(8), PasswordStrengthValidator])]
  })  
  }

  get loginControls():any{
    return this.LoginForm.controls;
  }

  
  login(){
    this.isSubmittedlogin=true;
   this.authService.login(this.LoginForm.value).subscribe(
    (res)=>{
      this.isloggedIn=true;
      console.log(res)
      this.isSubmittedlogin=false;
    },
    (err)=>{   this.isSubmittedlogin=false;}
   )
  }

// Example starter JavaScript for disabling form submissions if there are invalid fields
validation() {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
}


}
