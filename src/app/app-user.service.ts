import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' 
})
export class AppUserService {
  notloggedIn = window.sessionStorage.getItem('userId') ? false:true;
  
  constructor(public _http: HttpClient) { }
  
  register (user) {
    return this._http.post("http://meanstack-2018-5-benji-phortonssf.c9users.io:8080/api/AppUsers" , user)
};
  
  login (user) {
    return this._http.post("http://meanstack-2018-5-benji-phortonssf.c9users.io:8080/api/AppUsers/login" , user)
  };

  postFav(userID, token, favoriteMovie) {
    return this._http.post("http://meanstack-2018-5-benji-phortonssf.c9users.io:8080/api/AppUsers/" + userID + "/favorites?access_token=" + token, favoriteMovie)
  };
  
  getFav(userID, token, favoriteMovie) {
    return this._http.get("http://meanstack-2018-5-benji-phortonssf.c9users.io:8080/api/AppUsers/" + userID + "/favorites?access_token=" + token, favoriteMovie)
  };
  
  
 
  
}