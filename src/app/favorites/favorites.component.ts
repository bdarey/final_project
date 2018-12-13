import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppUserService } from '../app-user.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  titles: any;
  favoriteMovie: any;

  constructor(private router: Router, public _appUser : AppUserService) { }

  
  ngOnInit() {
  }

  onFavorites () {
    this._appUser.getFav(window.sessionStorage.userId, window.sessionStorage.token, this.favoriteMovie)
    .subscribe(data => {
      this.titles = data;
      console.log(data);
    })
  }


}