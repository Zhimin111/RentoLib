import { Injectable } from '@angular/core';
import {Signup} from '../app/model/signup.model';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  url :string ="https://torre-test-301909.appspot.com/user";

  constructor(private httpClient: HttpClient) { }

  save(signup: Signup){
    return this.httpClient.post(this.url,signup); 
  
  }
}
