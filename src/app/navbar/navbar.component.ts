import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionService } from '../action.service';
import { AppUserService } from '../app-user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // titles: any;
  // favoriteMovie: any;

  constructor(public _action : ActionService, private router: Router, public _appUser : AppUserService ) { }
  
  onLogout (){
      this._action.logout(window.sessionStorage.token)
      .subscribe (
          (data:any)=>{
              window.sessionStorage.clear()
          })
  }
  
  // onFavorites () {
  //   this._appUser.getFav(window.sessionStorage.userId, window.sessionStorage.token, this.favoriteMovie)
  //   .subscribe(data => {
  //     this.titles = data;
  //     console.log(data);
  //   })
  // }
 
  ngOnInit() {
  }

}

// window.sessionStorage.setItem('token', res.token);
//               window.sessionStorage.setItem('userId', res.userId);

