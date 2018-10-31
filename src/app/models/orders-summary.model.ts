import {OrderStatusModel} from './order-status.model';

export class OrdersSummaryModel {
  constructor(public count: number,
              public lastOrders: OrderStatusModel[]) {

  }
}
