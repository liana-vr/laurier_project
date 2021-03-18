import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersPageDetaledComponent } from './orders-page-detaled/orders-page-detaled.component';
import { OrdersPageRoutingModule } from './orders-page-routing.module';



@NgModule({
  declarations: [OrdersPageDetaledComponent],
  imports: [
    CommonModule,
    OrdersPageRoutingModule,
  ]
})
export class OrdersPageModule { }
