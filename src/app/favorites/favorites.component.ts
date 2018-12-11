import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppUserService } from '../app-user.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  storeTitle: any;

  constructor(private router: Router, public _appUser : AppUserService) { }

  ngOnInit() {
  }

  // onFavorites () {
  //   this._appUser.getFav(window.sessionStorage.userId, window.sessionStorage.token, this.favoriteMovie)
  //   .subscribe(data => {
  //     this.storeTitle = data['title'];
  //     console.log(this.storeTitle);
  //   })
  }

// getFav(userID, token, favoriteMovie) 

  // saveFavorites (save) {
  //   console.log(save)
  //   this._appUser.postFav(window.sessionStorage.userId, window.sessionStorage.token, {"title" : save} )
  //   .subscribe (
  //     (data:any) => {
  //       console.log(data)
  //     })



