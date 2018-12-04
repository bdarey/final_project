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
   

   
   
   
}
  
