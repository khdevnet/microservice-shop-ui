import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ProductModel } from '../../models/product.model';
import { CreateOrderModel } from '../../models/create-order.model';
import { OrderLineModel } from '../../models/order-line.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  private customerId = 1;

  products: ProductModel[] = [];
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.api.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  buy(productId: number) {
    this.api.createOrder(new CreateOrderModel(this.customerId, [new OrderLineModel(productId, 1)]))
      .subscribe(orderId => this.router.navigate(['/checkout/' + orderId]), () => alert("Order creatation error."));
  }
}
