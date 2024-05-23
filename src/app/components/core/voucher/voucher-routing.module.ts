import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoucherEntryComponent } from './voucher-entry/voucher-entry.component';
import { LVendorComponent } from '../vendor/l-vendor/l-vendor.component';
import { LVoucherComponent } from './l-voucher/l-voucher.component';
import { TransactioComponent } from './transactio/transactio.component';

const routes: Routes = [{
  path:'voucher', component:VoucherEntryComponent
},
{
  path:'listvoucher', component:LVoucherComponent
},
{
  path:'trans', component:TransactioComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoucherRoutingModule { }
