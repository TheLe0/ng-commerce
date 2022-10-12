import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private endpoint: string = "products/";
  protected baseUrl: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + this.endpoint)
  }
}
