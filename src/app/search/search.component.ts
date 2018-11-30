import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActionService } from '../action.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( public _action : ActionService ) { }

  ngOnInit() {
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
