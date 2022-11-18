import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { SharedModule } from '../shared/shared.module';
import { NgxParallaxScrollModule } from 'ngx-parallax-scroll';


@NgModule({
  declarations: [
    BannerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgxParallaxScrollModule
  ]
})
export class HomeModule { }
