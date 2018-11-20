import { Component } from '@angular/core';
import { ActionService } from './action.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor ( public _action : ActionService) {}
   
   
   onGo () {
     
   }
   
   ngOnInit () {
     
   
    this._action.getData()
      .subscribe((res: any) => {
       
        console.log(res);
      })
   }
  
}
