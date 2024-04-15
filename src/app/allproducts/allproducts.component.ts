import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, input } from '@angular/core';
import { Iproduct } from '../../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../../models/icategory';
import { FormsModule } from '@angular/forms'
import { Input } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Route, Router } from '@angular/router';
import { ProductsService } from '../../Services/Products.service';
@Component({
  selector: 'app-allproducts',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './allproducts.component.html',
  styleUrl: './allproducts.component.css'
})
export class AllproductsComponent implements OnInit{
  products: Iproduct[];
  categories: Icategory[];
  name: string = "mona"
  url: string = "https://fakeimg.pl/200/"
  totalOrderPrice: number = 0
  @Input() RCatId: number;
  filterdProducts: Iproduct[];
  @Output() pricechanged: EventEmitter<number> = new EventEmitter<number>();
  constructor(private ProductsService: ProductService, private router:Router, private productService:ProductsService) {
    this.products = productService.getAllProducts();
    this.categories = productService.getAllCategories();
    this.RCatId = 0;
    this.filterdProducts = this.products;
  }
  ngOnInit(): void {
    this.RCatId = 0;
    this.filterdProducts = this.products;
  }

  filterproductsfn() {
    if (this.RCatId == 0) {
      this.filterdProducts = this.products
    } else {
      this.filterdProducts = this.products.filter(prd => prd.catId == this.RCatId)
    }
  }

  buy(prd: Iproduct, count: string) {
    this.totalOrderPrice += prd.price * parseInt(count);
    prd.quantity -= parseInt(count)
    this.pricechanged.emit(this.totalOrderPrice);
  }
  trackProducts(i: number, p: Iproduct) {
    return p.id
  }
  navigateToDetails(id: number): void {
    this.router.navigate(['products', id]).then(() => {
      console.log('Navigation completed');
    });
  }

}
