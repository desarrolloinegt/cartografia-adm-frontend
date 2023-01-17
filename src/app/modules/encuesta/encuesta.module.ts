
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@components/header';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { EncuestaRoutingModule } from './encuesta-routing.module';
import { EncuestaPageComponent } from './pages/encuesta-page/encuesta-page.component';


@NgModule({
  declarations: [
  
    EncuestaPageComponent
  ],
  imports: [
    CommonModule,
    EncuestaRoutingModule,
    HeaderComponent,
    AppMaterialModule
  ]
})
export class EncuestaModule { }
