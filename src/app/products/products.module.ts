import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ProductsComponent } from './products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { PageHeaderModule } from './../shared';
import { ProductsService } from './products.service';
import { ProductComponent } from './product/product.component';


@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        CommonModule,
        ProductsRoutingModule,
        PageHeaderModule
    ],
    providers: [
        ProductsService
    ],
    declarations: [ProductsComponent, ProductComponent]
})
export class ProductsModule { }
