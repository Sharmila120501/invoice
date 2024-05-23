import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { CVendorComponent } from './c-vendor/c-vendor.component';
import { LVendorComponent } from './l-vendor/l-vendor.component';
import { EVendorComponent } from './e-vendor/e-vendor.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CVendorComponent,
    LVendorComponent,
    EVendorComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule,
    ReactiveFormsModule
  ]
})
export class VendorModule { }
