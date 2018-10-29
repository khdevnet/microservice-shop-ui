import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { CreateOrderModel } from '../models/create-order.model';
import { OrderStatusModel } from '../models/order-status.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private productsUrl = 'http://localhost:57737/api/v1/products/';
  private checkoutUrl = 'http://localhost:61033/api/v1/checkout/';

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${this.productsUrl}/all`)
  }

  createOrder(createOrder: CreateOrderModel): Observable<string> {
    return this.http.post<string>(this.checkoutUrl, createOrder)
  }

  trackOrderStatus(orderId: string): Observable<OrderStatusModel> {
    return this.http.get<OrderStatusModel>(`${this.checkoutUrl}/status/${orderId}`)
  }
}
