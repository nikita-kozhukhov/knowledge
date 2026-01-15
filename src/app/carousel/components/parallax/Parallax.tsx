'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from './components/Slide';
import { parallaxData } from '@/api/mockParallax';
import {
  Parallax as ParallaxModule,
  Pagination,
  Navigation,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './Parallax.module.scss';

export default function Parallax() {
  return (
    <div className={styles.parallax_container}>
      <h2 className={styles.parallax_header}>Слайдер - Параллакс</h2>
      <Swiper
        speed={600}
        parallax={true}
        navigation={true}
        modules={[ParallaxModule, Pagination, Navigation]}
        pagination={{ clickable: true }}
        className={styles.mySwiper}
      >
        <div
          slot="container-start"
          className={styles.parallax_bg}
          data-swiper-parallax="-23%"
        ></div>
        {parallaxData.map((slide) => {
          return (
            <SwiperSlide className={styles.slide} key={slide.id}>
              <Slide
                title={slide.title}
                subtitle={slide.subtitle}
                text={slide.text}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
