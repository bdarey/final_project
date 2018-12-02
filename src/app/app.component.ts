import { Component } from '@angular/core';
import { ActionService } from './action.service';
import { AppUserService } from './app-user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    user: any;
   constructor ( public _action : ActionService, public _appUser : AppUserService) { }
   
//     userData = {
//         firstName: "benji",
//         lastName: "dare",
//         email: "555@gmail.com",
//         password: "benji1"
//     };
 
 
//   onSearch () {
       
//     this._appUser.register(this.userData)
//       .subscribe(( res: any ) => {
//             // window.sessionStorage.setItem('token', res.token);
//             // window.sessionStorage.setItem('userId', res.userId);
//             console.log(res)
//         })
//     }
   
   
   
}
  
