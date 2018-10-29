import { OrderLineModel } from "./order-line.model";

export class CreateOrderModel {
    constructor(
        public customerId: number,
        public lines: OrderLineModel[]
    ) {

    }
}
