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
   
    userData = {
        firstName: "benji",
        lastName: "dare",
        email: "555@gmail.com",
        password: "benji1"
    };
 
 
   onSubmit () {
       
    this._appUser.register(this.userData)
       .subscribe(( res: any ) => {
            // window.sessionStorage.setItem('token', res.token);
            // window.sessionStorage.setItem('userId', res.userId);
            console.log(res)
        })
    }
   
   symbol: any;
   metaData: any;
   timeSeries: any;
   
   onGo () {
     
    this._action.getData(this.symbol)
      .subscribe((res: any) => {
            this.metaData = res['Meta Data'];
            this.timeSeries = res['Time Series (Daily)'];
            console.log(this.metaData);
            console.log(res);
            console.log(this.timeSeries)
        })
   }
   
}
  
