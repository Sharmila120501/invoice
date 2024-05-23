import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../auth/login/login.component';
import { OtpGenComponent } from '../../auth/otp-gen/otp-gen.component';
import { FrontComponent } from './front/front.component';

const routes: Routes = [

{
  path:'home', component:FrontComponent,

  children:[
    {
    path:'',
    loadChildren: () =>
      import('../../company/company.module').then(
        (m) =>m.CompanyModule
      )
  },
  {
    path:'',
    loadChildren: () =>
      import('../../vendor/vendor.module').then(
        (m) =>m.VendorModule
      )
  },
{
  path:'',
  loadChildren:() =>
    import('../../voucher/voucher.module').then(
      (m) =>m.VoucherModule
    )
}],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
