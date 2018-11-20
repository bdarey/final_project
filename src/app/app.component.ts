import { Component } from '@angular/core';
import { ActionService } from './action.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor ( public _action : ActionService) {}
   
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
        console.log(this.timeSeries);
      })
   }
}
  
