import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../../../models/iproduct';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent implements OnInit{
  productId!: number;
  product?: Iproduct;
  constructor(private route: ActivatedRoute, private productservice: ProductService) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['id'];
    });
    this.product = this.productservice.getProductByID(this.productId);

  }
}
