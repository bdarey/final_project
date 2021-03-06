import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActionService } from '../action.service';
import { Router } from '@angular/router';
import { AppUserService } from '../app-user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    search_result: any;
    movie: any;
    
  
   
    
  constructor( public _action : ActionService, public _appUser : AppUserService) {}
    
    
  // get search results of movies
  searchMovies() {
    this._action.searchMovie(this.movie).subscribe(data => {
      this.search_result = data['results'];
      console.log(this.search_result);
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
    
  
    
  ngOnInit() {}

}
