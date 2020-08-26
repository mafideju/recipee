// ANGULAR MODULES
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// CUSTOM MODULES
import { AuthRoutingModule } from './auth-routing.module';

// ANGULAR MATERIAL MODULES
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

// APLICATION COMPONENTS
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ]
})
export class AuthModule { }
