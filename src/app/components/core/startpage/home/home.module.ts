import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FrontComponent } from './front/front.component';
import { AuthModule } from '../../auth/auth.module';
import { AuthRoutingModule } from '../../auth/auth-routing.module';
import { HeaderComponent } from '../../layout/header/header.component';
import { SlidebarComponent } from '../../layout/slidebar/slidebar.component';


@NgModule({
  declarations: [
    FrontComponent, 
    HeaderComponent,
    SlidebarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule, 
 
    ]
})
export class HomeModule { }
