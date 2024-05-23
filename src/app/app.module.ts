import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from './components/core/auth/auth.module';

import { HomeModule } from './components/core/startpage/home/home.module';

import { HttpClientModule } from '@angular/common/http';

import { CompanyModule } from './components/core/company/company.module';

import { VoucherModule } from './components/core/voucher/voucher.module';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HomeModule,
    HttpClientModule,
    CompanyModule,
    VoucherModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
