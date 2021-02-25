import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {Login} from '../app/model/login.model';




@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url :string =" https://torre-test-301909.appspot.com/user/Login";

  constructor(private httpClient: HttpClient) { }

  save(login: Login){
    return this.httpClient.post(this.url,login); 
  
  }
 

}
