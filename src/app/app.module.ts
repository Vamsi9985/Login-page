import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ShowErrorsComponent } from './components/show-errors.component';
import { LoadingComponent } from './loading/loading.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterService } from './service/register.service';
import { LoginService } from './service/login.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './components/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LoadingComponent,
    ShowErrorsComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RegisterService, LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
