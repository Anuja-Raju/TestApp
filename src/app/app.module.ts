import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppbarComponent } from './component/appbar/appbar.component';
import { LoginComponent } from './component/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { SignupComponent } from './component/signup/signup.component';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    NgxCaptchaModule,
    MatIconModule
  ],
  providers:[
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
