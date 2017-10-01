import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { environment } from '../../../environments/environment';

@Injectable()
export class ProductsService {
  constructor(private http: Http) { }

  get(): Observable<any> {
    return this.http.get(`${environment.apiEndpoints.shop}/api/products`)
      .map(res => res.json())
      .catch(() => Observable.throw('No Products found'));
  }
}
