import { Component, OnInit } from '@angular/core';
import { IParallaxScrollConfig } from 'ngx-parallax-scroll';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // ngParallaxConf: IParallaxScrollConfig = {
  //   parallaxSpeed: 1,
  //   parallaxSmoothness: 1,
  //   parallaxDirection: 'reverse',
  //   parallaxTimingFunction: 'ease-in',
  //   parallaxThrottleTime: 80
  // };

}
