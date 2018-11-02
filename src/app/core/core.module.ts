import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './../app-routing.module';
import { HomeComponent } from './../core/home/home.component';

@NgModule({
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  declarations: [HeaderComponent, HomeComponent]
})
export class CoreModule { }
