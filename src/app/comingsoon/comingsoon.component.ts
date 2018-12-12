import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppUserService } from '../app-user.service';
import { ActionService } from '../action.service';

@Component({
  selector: 'app-comingsoon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.css']
})
export class ComingsoonComponent implements OnInit {
  movie: any;
  upcoming_movies: any;
  
  constructor(public _appUser : AppUserService, public _action : ActionService) {
    
   // get upcoming movies
    this._action.getUpcomingMovies().subscribe(data => {
        this.upcoming_movies = data['results'];
        // console.log(this.upcoming_movies);
    });
  }

  ngOnInit() {
  }

}
