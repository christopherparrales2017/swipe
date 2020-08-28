import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  SwiperModule,
  SwiperConfigInterface,
  SWIPER_CONFIG,
} from 'ngx-swiper-wrapper';
import { AppComponent } from './app.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true,
};

@NgModule({
  declarations: [AppComponent],
  imports: [SwiperModule, BrowserModule, FlexLayoutModule],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
