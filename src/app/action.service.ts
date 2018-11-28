import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(public _http: HttpClient) {}
  
  getData (symbol) {
    // console.log(symbol)
    return this._http.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + symbol + '&apikey=B5ANTD06CCK9VORB')
  }
}

