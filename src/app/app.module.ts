import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/core/layout/header/header.component';
import { SlidebarComponent } from './components/core/layout/slidebar/slidebar.component';
import { AuthModule } from './components/core/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
