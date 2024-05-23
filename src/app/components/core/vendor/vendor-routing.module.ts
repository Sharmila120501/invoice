import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CVendorComponent } from './c-vendor/c-vendor.component';
import { LVendorComponent } from './l-vendor/l-vendor.component';
import { EVendorComponent } from './e-vendor/e-vendor.component';

const routes: Routes = [
  {
    path:"addvendor", component:CVendorComponent
  },
  {
    path:"listvendor",component:LVendorComponent
  },
  {
    path:"editvendor", component:EVendorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
