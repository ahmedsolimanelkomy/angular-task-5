import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { Observable } from 'rxjs';
import { Icategory } from '../../models/icategory';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

constructor(private httpClient:HttpClient) { }
  getAllProducts(): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(`${environment.url}/products`)
  }
  getProductByID(id:number): Observable<Iproduct>{
    return this.httpClient.get<Iproduct>(`${environment.url}/products/${id}`)
  }
  getAllCategories():Observable<Icategory[]> {
    return this.httpClient.get<Icategory[]>(`${environment.url}/Categories`)
  }
  getCategoryByID(id: number): Observable<Icategory> {
    return this.httpClient.get<Icategory>(`${environment.url}/Categories/${id}`)
  }
  getProductByCatID(CatID: number): Observable<Iproduct[]>{
    return this.httpClient.get<Iproduct[]>(`${environment.url}/products?CatID=${CatID}`)
  }
  addProduct(prd: Iproduct): Observable<Iproduct>{
    return this.httpClient.post<Iproduct>(`${environment.url}/products`,JSON.stringify(prd))
  }
}
