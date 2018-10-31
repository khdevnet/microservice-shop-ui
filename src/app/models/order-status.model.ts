import {OrderStatusProductModel} from './order-status-product.model';

export class OrderStatusModel {
  constructor(public id: string,
              public status: string,
              public lines: OrderStatusProductModel[]) {

  }
}
