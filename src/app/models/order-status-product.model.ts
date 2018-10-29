export class OrderStatusProductModel {
    constructor(
        public productId:number,
        public quantity: number,
        public status: string,
    ) {
        
    }
}