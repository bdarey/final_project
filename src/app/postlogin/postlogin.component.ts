import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActionService } from '../action.service';
import { Router } from '@angular/router';
import { AppUserService } from '../app-user.service';

@Component({
  selector: 'app-postlogin',
  templateUrl: './postlogin.component.html',
  styleUrls: ['./postlogin.component.css']
})
export class PostloginComponent implements OnInit {
    popular_movies: any;
    upcoming_movies: any;
    // search_result: any;
    // movie: any;
  
  constructor(public _action : ActionService, public _appUser : AppUserService) { 


   // get upcoming movies
    this._action.getUpcomingMovies().subscribe(data => {
        this.upcoming_movies = data['results'];
        console.log(this.upcoming_movies);
    });
    
    // get popular movies
    
    this._action.getPopularMovies().subscribe(data => {
      this.popular_movies = data['results'];
      // console.log(this.popular_movies);
    });
    
}
    

  saveFavorites (save) {
    console.log(save)
    this._appUser.postFav(window.sessionStorage.userId, window.sessionStorage.token, {"title" : save} )
    .subscribe (
      (data:any) => {
        console.log(data)
      })
  } 
    
  ngOnInit() {
  }

}
