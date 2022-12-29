import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Modules/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewUserComponent } from './Modules/users/new-user/new-user.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [AppComponent, LoginComponent, NewUserComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
