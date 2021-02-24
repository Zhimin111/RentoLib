import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}
  loginUrl = 'assets/login.json';

  getLogin(){
    return this.http.get<Login>(this.loginUrl);
  }
}


export interface Login {
  username: string;
  password: string;
} 
