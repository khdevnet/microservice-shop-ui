import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { PageHeaderModule } from './../../shared';
import { ProductsService } from './products.service';
@NgModule({
    imports: [
        HttpModule,
        CommonModule,
        ProductsRoutingModule,
        PageHeaderModule
    ],
    providers: [
        ProductsService
    ],
    declarations: [ProductsComponent]
})
export class ProductsModule { }
