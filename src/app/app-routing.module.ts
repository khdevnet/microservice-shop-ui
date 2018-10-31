import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { TrackingComponent } from './pages/tracking/tracking.component';

const routes: Routes = [
  { path: 'checkout/:id', component: CheckoutComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'tracking/:id', component: TrackingComponent },
  { path: 'tracking', component: TrackingComponent },
  { path: 'products', component: ProductsComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
