import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ErrorComponent } from './error/error.component';
import { OrderComponent } from './order/order.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AllproductsComponent } from './allproducts/allproducts.component';

export const routes: Routes = [
    {path:'', redirectTo: '/home', pathMatch :'full'},
    {path:'home', component:HomeComponent},
    {path:'aboutus', component:AboutUsComponent},
    { path: 'contactus', component: ContactusComponent },
    {path:'order',component:OrderComponent},
    { path: 'products', component: ProductsComponent },
    { path: 'products/:id', component: ProductdetailsComponent },
    { path:'allproducts',component:AllproductsComponent},
    {path:'**', component:ErrorComponent}
];
