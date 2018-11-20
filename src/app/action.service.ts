import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(private _http: HttpClient) {}
  
  getData () {
    return this._http.get('https://www.alphavantage.co/query?' + '&api_key=B5ANTD06CCK9VORB')
  }
}
