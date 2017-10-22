import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

import {ProductsService} from '../products.service';
import {Product} from '../shared/models/product';


@Component({
    selector: 'shop-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    @ViewChild('productForm') form: NgForm;

    product: Product;

    constructor(private route: ActivatedRoute,
                private productsService: ProductsService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params.id === 'new') {
                this.product = new Product('', 0);
            } else {
                this.productsService.getById(params.id).subscribe(resp => this.product = resp);
            }
        });
    }

    submit() {
        if (this.form.valid) {
            if (this.product.id > 0) {
                this.productsService.update(this.product);
            } else {
                this.productsService.add(this.product.name, this.product.price);
            }
        }
    }

}
