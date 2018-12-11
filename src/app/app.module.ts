import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActionService } from './action.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PostloginComponent } from './postlogin/postlogin.component';
import { AppUserService } from './app-user.service';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LoginComponent,
    SignupComponent, 
    PostloginComponent, ComingsoonComponent, NavbarComponent, FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule, 
    HttpClientModule, 
    FormsModule, 
    ChartsModule
  ],
  providers: [ActionService, AppUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
