import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HeaderComponent } from '@components/header';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { UserPageComponent } from './pages/user-page';

@NgModule({
  declarations: [UserPageComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HeaderComponent,
    AppMaterialModule
  ]
})
export class UserModule { }
