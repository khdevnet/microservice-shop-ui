import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {ProductModel} from '../../models/product.model';
import {OrderLineModel} from "../../models/order-line.model";
import {CreateOrderModel} from "../../models/create-order.model";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  private customerId = 1;
  public customerName = 'Han';
  public customerLastname = 'Solo';
  public total: number;
  products: ProductModel[];

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.api.getProducts().subscribe(products => {
        this.products = products.filter(p => p.id === parseInt(params['id']));
        this.total = this.products.reduce((agg, item) => agg + item.price, 0);
      }, () => this.router.navigate(['/products']));

    });
  }

  createOrder() {
    this.api.createOrder(new CreateOrderModel(this.customerId, [new OrderLineModel(this.products[0].id, 1)]))
      .subscribe(orderId => this.router.navigate(['/tracking/' + orderId]), () => alert("Order creatation error."));
  }

}
