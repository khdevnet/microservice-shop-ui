import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ProductsService } from './products.service';

@Component({
    selector: 'app-tables',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    animations: [routerTransition()]
})
export class ProductsComponent implements OnInit {
    rows = [];
    constructor(private productsService: ProductsService) { }
    ngOnInit() {
        this.productsService.get()
        .subscribe(
          res => { this.rows = res.map(el => el) },
          error => () => {}
        );
     }
}
