import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import{ProductPosting} from '../model/ProductPosting.model';


@Injectable({
  providedIn: 'root'
})
export class ProductPostingService {

  constructor(private httpClient: HttpClient) { }
  url : string = "https://torre-test-301909.appspot.com/product/new";

  save(productPosting: ProductPosting){
    return this.httpClient.post(this.url,productPosting);
}
}
