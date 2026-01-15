'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination, Autoplay } from 'swiper/modules';

import { cubeData } from '@/api/mockCube';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import styles from './Cube.module.scss';

export default function Cube() {
  return (
    <div className={styles.cube_container}>
      <h2 className={styles.cube_header}>Слайдер - Куб</h2>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        loop
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCube, Pagination, Autoplay]}
        className={styles.mySwiper}
      >
        {cubeData.map((item, index) => (
          <SwiperSlide key={item.id}>
            <Image
              src={item.src}
              alt={item.alt}
              width={500}
              height={500}
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
