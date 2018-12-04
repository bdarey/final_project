import { Component, OnInit } from '@angular/core';
import { AppUserService } from '../app-user.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  constructor(public _appUser : AppUserService, private router: Router) { }
  
  

  ngOnInit() {
  }
  
  userData = {
       email: '', 
       password:''
    };
    
    onLogin () {
       console.log(this.userData)
      this._appUser.login(this.userData)
         .subscribe(( res: any ) => {
              window.sessionStorage.setItem('token', res.token);
              window.sessionStorage.setItem('userId', res.userId);
              console.log(res)
      this.router.navigate(['PostLoginComponent'])
          })
    }
}
