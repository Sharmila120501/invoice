import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CCompanyComponent } from './c-company/c-company.component';
import { LCompanyComponent } from './l-company/l-company.component';
import { CBankComponent } from './c-bank/c-bank.component';
import { LBankComponent } from './l-bank/l-bank.component';
import { EBankComponent } from './e-bank/e-bank.component';
import { ECompanyComponent } from './e-company/e-company.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CCompanyComponent,
    LCompanyComponent,
    CBankComponent,
    LBankComponent,
    EBankComponent,
    ECompanyComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class CompanyModule { }
