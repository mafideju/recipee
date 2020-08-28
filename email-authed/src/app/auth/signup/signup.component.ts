import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PasswordMatchController } from '../validators/password-match-controller';
import { UniqueUsernameController } from '../validators/unique-username-controller';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[A-Za-z0-9]+$/)
    ], [ this.usernameValidator.validate ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    passwordConfirmation: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
  }, {
    validators: [ this.passwordValidator.validate ]
  });

  constructor(
    private passwordValidator: PasswordMatchController,
    private usernameValidator: UniqueUsernameController
  ) { }

  ngOnInit(): void {
    // console.log('this.authForm :>> ', this.authForm);
  }

  // showErrors() {
  //   return this.authForm.errors;
  // }

  onSubmit() {
    console.log('object :>> ');
  }

}
