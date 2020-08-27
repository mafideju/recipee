import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { AsyncValidator, FormGroup } from '@angular/forms';
import { map, catchError } from 'rxjs/operators'
import { of } from 'rxjs';

import { AuthService } from '../auth.service';


@Injectable({
  providedIn: 'root'
})
export class UniqueUsernameController implements AsyncValidator {

  constructor(
    // private http: HttpClient,
    private authService: AuthService
  ) {}

  validate = (control: FormGroup) => {

    console.log('control :>> ', control);

    // this.http.post('https://api.angular-email.com/auth/username', { username: control.value })
    return this.authService.getUsernameEquality(control.value)
      .pipe(
        map(() => null),
        catchError((e) => {
          console.log('err :>> ', e);
          if (e.error.username) {
            // e.error.username === 'Username in use'
            return of({ nonUniqueUsername: true });
          } else {
            return of({ networkError: true });
          }
        })
      );

  }

}
