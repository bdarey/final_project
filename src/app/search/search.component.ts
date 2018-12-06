import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActionService } from '../action.service';
import { Router } from '@angular/router';
import { SignupComponent } from '../signup/signup';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    popular_movies: any;
    upcoming_movies: any;
    search_result: any;
    movie: any;
    
  constructor( public _action : ActionService ) { 
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
      // get search results of movies
  searchMovies() {
    this._action.searchMovie(this.movie).subscribe(data => {
      this.search_result = data['results'];
      console.log(this.search_result);
    });
    
}
    
  ngOnInit() {
  }
  
//   title: any;
//   results: any;
//   timeSeries: any;
   
//   onGo () {
     
//     this._action.getData(this.title)
//       .subscribe((res: any) => {
//             this.results = res.results;
//             // this.timeSeries = res['Time Series (Daily)'];
//             console.log(this.metaData);
//             console.log(res);
//             console.log(this.timeSeries)
//         })
//   }

}
