import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  private orderId: string = '';

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.orderId = params['id']);
  }

  track() {
    this.api.trackOrderStatus(this.orderId).subscribe(order => { alert(`Order with ${order.id} id status: ${order.status}`); });
  }

}
