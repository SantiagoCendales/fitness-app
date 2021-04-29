import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
