import { Injectable } from '@angular/core';
import {Signup} from '../model/signup.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  url :string ="https://torre-test-301909.appspot.com/user";

  constructor(private httpClient: HttpClient) { }

  save(signup: Signup){
    return this.httpClient.post(this.url,signup)
  
  
  }
  
}
