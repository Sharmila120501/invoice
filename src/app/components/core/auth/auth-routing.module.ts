import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OtpGenComponent } from './otp-gen/otp-gen.component';

const routes: Routes = [
  {
    path:'', component:LoginComponent
  },
  {
    path:'otp', component:OtpGenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }