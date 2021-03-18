import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from 'src/app/shared/models/order';
import { BreadcrumbService } from 'xng-breadcrumb';
import { OrdersPageService } from '../orders-page.service';

@Component({
  selector: 'app-orders-page-detaled',
  templateUrl: './orders-page-detaled.component.html',
  styleUrls: ['./orders-page-detaled.component.scss']
})
export class OrdersPageDetaledComponent implements OnInit {
  order: IOrder;

  constructor(private route: ActivatedRoute, private breadcrumbService: BreadcrumbService, private ordersService: OrdersPageService) { 
    this.breadcrumbService.set('@OrderDetailed', '');
  }

  ngOnInit(){
    this.ordersService.getOrderDetailed(+this.route.snapshot.paramMap.get('id')).subscribe((order: IOrder) => {
      this.order = order;
      this.breadcrumbService.set('@OrderDetailed', `Order# ${order.id} - ${order.status}`);
    }, error => {
      console.log(error);
    });
  }

}
