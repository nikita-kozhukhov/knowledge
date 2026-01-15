'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import { bannerData } from '@/api/mockBanner';

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './Banner.module.scss';

export default function Banner() {
  return (
    <div className={styles.banner_container}>
      <h2 className={styles.banner_header}>Слайдер - Баннер</h2>
      <Swiper
        direction="vertical"
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className={styles.slider}
      >
        {bannerData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={`${styles.banner} ${styles[item.style]}`}>
              <h3 className={styles.banner_title}>{item.title}</h3>
              <p className={styles.banner_text}>{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
