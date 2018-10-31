import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {ProductModel} from '../../models/product.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: ProductModel[] = [];

  constructor(private api: ApiService, private router: Router) {
  }

  ngOnInit() {
    this.api.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  buy(productId: number) {
    this.router.navigate(['/checkout/' + productId]);
  }
}
