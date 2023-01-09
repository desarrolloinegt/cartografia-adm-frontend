import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '@components/header';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    HeaderComponent
  ]
})
export class AuthModule { }
