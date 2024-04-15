import { Component, Output } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../../models/icategory';
import { AllproductsComponent } from "../allproducts/allproducts.component";
import { Router } from '@angular/router';
import { ProductsComponent } from "../products/products.component";

@Component({
    selector: 'app-order',
    standalone: true,
    templateUrl: './order.component.html',
    styleUrl: './order.component.css',
    imports: [NavComponent, FooterComponent, FormsModule, CommonModule, AllproductsComponent, ProductsComponent]
})
export class OrderComponent {
    @Output()selectedCatId: number = 0;
    categories!: Icategory[]
    totalOrderPrice: number = 0;
    constructor(private router:Router) {
        this.categories = [
            { id: 1, name: "Mobiles" },
            { id: 2, name: "Laptops" },
            { id: 3, name: 'Tablets' }
        ]
    }
    onpricechanged(top: number) {
        this.totalOrderPrice = top;
    }
    navigateToDetails(id: number): void {
        this.router.navigate(['products', id]).then(() => {
            console.log('Navigation completed');
        });
    }
}
