import { Component, OnInit } from '@angular/core';
import { IOrder } from '../shared/models/order';
import { OrdersPageService } from './orders-page.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {
  orders: IOrder[];

  constructor(private ordersService: OrdersPageService) { }

  ngOnInit(){
    this.getOrders();
  }

  getOrders(){
    this.ordersService.getOrdersForUser().subscribe((orders: IOrder[]) => {
      this.orders = orders;
    }, error => {
      console.log(error);
    });
  }

}
