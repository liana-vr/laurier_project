import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrderPageComponent } from './order-page.component';
import { OrdersPageDetaledComponent } from './orders-page-detaled/orders-page-detaled.component';

const routes: Routes = [
  {path: '', component: OrderPageComponent},
  {path: ':id', component: OrdersPageDetaledComponent, data: {breadcrumb: {alias: 'OrdersPageDetaled'}}}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OrdersPageRoutingModule { }
