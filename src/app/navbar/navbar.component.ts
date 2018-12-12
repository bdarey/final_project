import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionService } from '../action.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _action : ActionService, private router: Router ) { }
  
  // onLogout () {
  //   this._action.logout(window.sessionStorage.token)
  //   .subscribe( ( data : any ) => {
  //     console.log('hello')
  //   window.sessionStorage.clear()
  // })
  // }
  
 
 onLogout() {
    window.sessionStorage.removeItem('token');
    window.sessionStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }
 
  ngOnInit() {
  }

}

// window.sessionStorage.setItem('token', res.token);
//               window.sessionStorage.setItem('userId', res.userId);

