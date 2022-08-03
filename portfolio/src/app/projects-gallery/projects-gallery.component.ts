import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import 'swiper/css/bundle';

// swiper core styles
import 'swiper/css';

// modules styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { EffectCards, Navigation, Pagination, Swiper,SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

Swiper.use([Navigation, Pagination, EffectCards]);

new Swiper('.my-swiper', {
  // pass modules here
  modules: [Navigation, Pagination, EffectCards],
  // ...
});

@Component({
  selector: 'app-projects-gallery',
  templateUrl: './projects-gallery.component.html',
  styleUrls: ['./projects-gallery.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsGalleryComponent implements OnInit {

  swiperConfig: SwiperOptions = {
    effect: 'cards',
    navigation: false
  }
  constructor() {}

  ngOnInit(): void {}

  logSlide(){
    console.log('slide');
  }
}
