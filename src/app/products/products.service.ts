import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import {environment} from '../../environments/environment';
import {Product} from './shared/models/product';

@Injectable()
export class ProductsService {
    private url = environment.apiEndpoints.shop;

    constructor(private http: Http) {
    }

    get(): Observable<any> {
        return this.http.get(`${this.url}/api/products`)
            .map(res => res.json())
            .catch(() => Observable.throw('No Products found'));
    }

    getById(id: number): Observable<Product> {
        return this.http.get(`${this.url}/api/products/${id}`)
            .map(res => res.json())
            .catch(() => Observable.throw('Product not found'));
    }

    add(name: string, price: number): void{
        this.http.post(
            `${this.url}/api/products`,
            {name: name, price: price})
            .map(res => res.json())
            .catch(() => Observable.throw('Product not found'))
            .subscribe();
    }

    update(product: Product): void {
        this.http.put(`${this.url}/api/products`, product)
            .map(res => res.json())
            .catch(() => Observable.throw('Product not found'))
            .subscribe();
    }
}
