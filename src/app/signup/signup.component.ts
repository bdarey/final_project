import { Component, OnInit } from '@angular/core';
import { AppUserService } from '../app-user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public _appUser : AppUserService) { }

  ngOnInit() {
  }

    userInfo = {
      firstName: '', 
      lastName: '',
      email: '', 
      password: ''
    }
 
    onSignup () {
      console.log(this.userInfo)
      this._appUser.register(this.userInfo)
         .subscribe(( res: any ) => {
              window.sessionStorage.setItem('token', res.token);
              window.sessionStorage.setItem('userId', res.userId);
              console.log(res)
              
          })
    }
}
