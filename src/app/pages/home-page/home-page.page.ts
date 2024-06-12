import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { EventCardComponent } from '../event-card/event-card.component';
import Swiper from 'swiper';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements AfterViewInit{

  constructor() { }

  swiperSlideChanged(e: any){
    console.log('changed ', e);
  }
  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      initialSlide: 0,
      speed: 400,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

}
