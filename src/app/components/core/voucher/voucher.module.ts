import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoucherRoutingModule } from './voucher-routing.module';
import { VoucherEntryComponent } from './voucher-entry/voucher-entry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LVoucherComponent } from './l-voucher/l-voucher.component';
import { TransactioComponent } from './transactio/transactio.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    VoucherEntryComponent,
    LVoucherComponent,
    TransactioComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    VoucherRoutingModule,
    ReactiveFormsModule, FormsModule
  ]
})
export class VoucherModule { }
