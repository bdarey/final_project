import { Component, OnInit } from '@angular/core';
import { AppUserService } from '../app-user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  constructor(public _appUser : AppUserService) { }
  
  userData = {
        firstName: "benji",
        lastName: "dare",
        email: "555@gmail.com",
        password: "benji1"
    };
    
    onLogin () {
       
      this._appUser.register(this.userData)
         .subscribe(( res: any ) => {
              window.sessionStorage.setItem('token', res.token);
              window.sessionStorage.setItem('userId', res.userId);
              console.log(res)
          })
    }

  ngOnInit() {
  }

}
