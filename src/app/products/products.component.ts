import { Component, OnChanges, OnInit, SimpleChanges, output } from '@angular/core';
import { ProductsdirectiveDirective } from "../Directives/productsdirective.directive";
import { CreditCardPipe } from '../Pipes/credit-card.pipe';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductsdirectiveDirective,CreditCardPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements  OnInit {

  CreditCardNo!: string;
  bgColor = 'transparent';
  ProductComponent() {
  }
  ngOnInit(): void {
    this.CreditCardNo = "1234567891234567";
  }
  
}
