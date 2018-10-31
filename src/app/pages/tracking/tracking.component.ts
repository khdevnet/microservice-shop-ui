import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {OrdersSummaryModel} from '../../models/orders-summary.model';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {

  private orderId = '';
  private customerId = 1;
  private ordersSummary: OrdersSummaryModel;

  constructor(private api: ApiService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.orderId = params['id']);
    this.loadSummary();
  }

  track() {
    if (this.orderId) {
      this.api.getOrderById(this.orderId).subscribe(ordersSummary => {
        this.ordersSummary = ordersSummary;
      }, () => alert('Order Id tracking error.'));
    } else {
      this.loadSummary();
    }
  }

  loadSummary() {
    this.api.getOrdersSummary(this.customerId, 10).subscribe(ordersSummary => {
      this.ordersSummary = ordersSummary;
    });
  }

  refresh() {
    this.loadSummary();
  }

}
