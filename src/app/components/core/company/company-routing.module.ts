import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CCompanyComponent } from './c-company/c-company.component';
import { CBankComponent } from './c-bank/c-bank.component';
import { LCompanyComponent } from './l-company/l-company.component';
import { LBankComponent } from './l-bank/l-bank.component';

const routes: Routes = [{
  path:'addcompany', component:CCompanyComponent
},
{
  path:'addbank', component:CBankComponent
},
{
  path:'viewcom', component:LCompanyComponent
},
{
  path:'viewbank', component:LBankComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
