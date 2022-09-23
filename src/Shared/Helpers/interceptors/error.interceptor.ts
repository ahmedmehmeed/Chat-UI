import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private toastr :ToastrService,private router : Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {    
    return next.handle(request).pipe(catchError(err=>this.handelErrors(err)))
    
  }


  handelErrors(error:HttpErrorResponse){
    console.log("error.status",error.status)
    console.log("error.error",)
    switch(error.status){
  
    case 400:
       if(typeof(error.error.errors)==="object")
      this.handelValidationError(error)
      else 
      this.toastr.error(error.error);
    break;
   case 401:
      this.toastr.error(error.error.message);
      this.router.navigate(['/login'])
    break;
    case 404:
    this.router.navigate(['/error'])
    break;
    case 500:
      this.toastr.error(error.error.message);
      this.router.navigate(['/error'])
    break;
      
    default:
      this.toastr.error(error.error.message);
    break;
   }

   return throwError(()=>new Error ("Something unexpected went wrong !"));
   }

  handelValidationError(error:HttpErrorResponse){
    let errors=error.error.errors;
    Object.keys(errors).forEach((key,index)=>{
      errors[key].forEach(element => {
        this.toastr.error(element)
      });
    })
  }
}


