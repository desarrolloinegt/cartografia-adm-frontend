import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthHeaderComponent } from './components';
import { LogoutComponent } from './pages/logout/logout.component';
import { NgxPermissionsModule } from 'ngx-permissions';


@NgModule({
  declarations: [
    LoginPageComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    AuthHeaderComponent,
    NgxPermissionsModule
  ]
})
export class AuthModule { }
