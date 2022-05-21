import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MoviePageComponent} from "./MyComponents/movie-page/movie-page.component";
import { ActorsPageComponent } from './MyComponents/actors-page/actors-page.component';
import { SignupComponent } from './MyComponents/signup/signup.component';
import { SigninComponent } from './MyComponents/signin/signin.component';

const routes: Routes = [
  {path: 'movies', component: MoviePageComponent},
  {path: 'actors', component: ActorsPageComponent},
  {path: '',   redirectTo: 'movies', pathMatch: 'full' }
  /* {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
   */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
