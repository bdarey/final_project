import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionService } from '../action.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _action : ActionService ) { }
  
  onLogout () {
    this._action.logout(window.sessionStorage.token)
    .subscribe( ( data : any ) => {
    window.sessionStorage.clear()
  })
  }
  
 
  ngOnInit() {
  }

}
