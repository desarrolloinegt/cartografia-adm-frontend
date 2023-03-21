import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SpinnerModule } from '@core/spinner/spinner.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from '@core/interceptors/spinner.interceptor';
import { MatMenuModule } from '@angular/material/menu';
import { HttpErrorInterceptor } from '@core/interceptors/HttpErrorInterceptor.interceptor';
import { NgxPermissionsModule } from 'ngx-permissions';
import { MatTabsModule } from '@angular/material/tabs';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TokenInterceptor } from '@core/interceptors/token.interceptor';
import { MatTreeModule } from '@angular/material/tree';
import { DrawerRailModule } from 'angular-material-rail-drawer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    SpinnerModule,
    MatDialogModule,
    MatCheckboxModule,
    MatMenuModule,
    MatTabsModule,
    DragDropModule,
    MatTreeModule,
    DrawerRailModule,
    NgxPermissionsModule.forRoot(),
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
