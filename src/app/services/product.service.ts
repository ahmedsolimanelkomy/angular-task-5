import { Injectable } from '@angular/core';
import { Iproduct } from '../../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../../models/icategory';
import { FormsModule } from '@angular/forms'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Iproduct[];
  categories: Icategory[];
  product!: Iproduct;
  constructor() {
    this.products = [
      {
        id: 100,
        name: 'Iphone',
        price: 15000,
        quantity: 10,
        imgUrl: 'https://fakeimg.pl/200/',
        catId: 1,
      },
      {
        id: 200,
        name: 'Oppo',
        price: 6000,
        quantity: 0,
        imgUrl: 'https://fakeimg.pl/200/',
        catId: 1,
      },
      {
        id: 300,
        name: 'Dell Laptop',
        price: 38000,
        quantity: 105,
        imgUrl: 'https://fakeimg.pl/300/',
        catId: 2,
      },
      {
        id: 400,
        name: 'Hp Laptop',
        price: 40000,
        quantity: 68,
        imgUrl: 'https://fakeimg.pl/300/',
        catId: 2,
      },
      {
        id: 500,
        name: 'lenovo tablet',
        price: 50000,
        quantity: 2,
        imgUrl: 'https://fakeimg.pl/300/',
        catId: 3,
      },
      {
        id: 600,
        name: 'samsung tablet',
        price: 7000,
        quantity: 0,
        imgUrl: 'https://fakeimg.pl/300/',
        catId: 3,
      },
    ];

    this.categories = [
      { id: 1, name: "Mobiles" },
      { id: 2, name: "Laptops" },
      { id: 3, name: 'Tablets' }
    ] }
  getProductsByCatID(CatID:number) {
    return this.products.filter(p => p.catId == CatID);
  }
  getProductByID(PID: number) {
    var res = this.products.find(p => p.id == PID);
    return res;
  }
  getAllProducts() {
    return this.products;
  }
  getAllCategories() {
    return this.categories;
  }
}
