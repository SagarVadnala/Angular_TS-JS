import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  httpClient = inject(HttpClient);


  getProducts() {
    return this.httpClient.get<Product[]>('https://localhost:7034/api/ProductAPI/getall');
  }

  addProduct(productToAdd: Product) {
    return this.httpClient.post<boolean>('https://localhost:7034/api/ProductAPI/add', productToAdd);
  }

  deleteProduct(pid: number) {
    let myheader=  new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "myname":"pradeep"
    })
    return this.httpClient.delete<boolean>(`https://localhost:7034/api/ProductAPI/delete/${pid}`,{headers: myheader});
  }

  getProductById(pid: number) {
    return this.httpClient.get<Product>(`https://localhost:7034/api/ProductAPI/get/${pid}`);
  }


}
