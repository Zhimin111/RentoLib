import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import {Login} from '../model/login.model';
import { Observable, pipe, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url :string =" https://torre-test-301909.appspot.com/user/Login";

  constructor(private httpClient: HttpClient) { }

  save(login: Login){
    return this.httpClient.post(this.url,login);
    
  }; 
  
      
      
      
      
  
  }
  

