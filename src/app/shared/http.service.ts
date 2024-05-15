import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }
  getAllProducts() {
    return this.http.get('https://dummyjson.com/products')
  }
  getProductCategory(category:string){
    return this.http.get(`https://dummyjson.com/products/category/${category}`)
  }
  getProductById(id:number){
    return this.http.get(`https://dummyjson.com/products/${id}`)
  }
  getProductBySearch(search:string){
    return this.http.get(`https://dummyjson.com/products/search?q=${search}`)
  }
}
