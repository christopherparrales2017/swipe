import { Component,OnInit, ViewChild } from '@angular/core';
import { Swiper, SwiperOptions } from 'swiper';
import {
  SwiperComponent,
  SwiperDirective,
  SwiperConfigInterface,
  SwiperScrollbarInterface,
  SwiperPaginationInterface,
} from 'ngx-swiper-wrapper';
@Component({
  selector: 'app-card-swipe',
  templateUrl: './card-swipe.component.html',
  styleUrls: ['./card-swipe.component.css'],
})
export class CardSwipeComponent implements OnInit {
  swiperParams: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
  };

  swiper = new Swiper('.swiper-container', this.swiperParams);
  public slides = [
    'First slide',
    'Second slide',
    'Third slide',
    'Fourth slide',
    'Fifth slide',
    'Sixth slide',
  ];
  public disabled: boolean = true;
  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;
  public config2: SwiperConfigInterface = {
    navigation: false,
    hashNavigation: false,
    keyboard: true,
    // el:'.swiper-container'
  };
  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 3,
    slideToClickedSlide: true,
    mousewheel: true,
    scrollbar: false,
    watchSlidesProgress: true,
    navigation: true,
    keyboard: true,
    pagination: false,
    centeredSlides: true,
    loop: true,
    roundLengths: true,
    slidesOffsetBefore: 100,
    slidesOffsetAfter: 100,
    spaceBetween: 50,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
    },
  };
  constructor() {}

  ngOnInit(): void {}
}
