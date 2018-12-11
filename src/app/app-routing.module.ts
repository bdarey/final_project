import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PostloginComponent } from './postlogin/postlogin.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FavoritesComponent } from './favorites/favorites.component';


const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'postlogin', component: PostloginComponent }, 
  { path: 'home', component: HomeComponent },
  { path: 'comingsoon', component: ComingsoonComponent }, 
  { path: 'navbar', component: NavbarComponent }, 
  { path: 'favorites', component: FavoritesComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


