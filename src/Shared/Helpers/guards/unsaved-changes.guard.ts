import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { UserEditComponent } from '../../../app/Modules/home/user-edit/user-edit.component';

@Injectable({
  providedIn: 'root',
})
export class UnsavedChangesGuard implements CanDeactivate<unknown> {
  canDeactivate(component: UserEditComponent): boolean {
    if (component.userForm.dirty) {
      /*         return confirm("your change losts") */
      Swal.fire({
        title: 'Are you sure want to move?',
        text: 'your changes will be lost!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it',
      }).then((result) => {
        if (result.value) {
          return true;
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          return false;
        }
      });
      
    } else return true;
  }
}
