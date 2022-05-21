import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviePageComponent } from './MyComponents/movie-page/movie-page.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActorsPageComponent } from './MyComponents/actors-page/actors-page.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { SignupComponent } from './MyComponents/signup/signup.component';
import { SigninComponent } from './MyComponents/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviePageComponent,
    ActorsPageComponent,
    NavbarComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
