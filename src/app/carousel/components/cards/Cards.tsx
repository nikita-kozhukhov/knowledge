'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import Image from 'next/image';

import { cardsData } from '@/api/mockCards';

import 'swiper/css';
import 'swiper/css/effect-cards';

import styles from './Cards.module.scss';

export default function Cards() {
  return (
    <div className={styles.cards_container}>
      <h2 className={styles.cards_header}>Слайдер - Карты</h2>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className={styles.mySwiper}
      >
        {cardsData.map((card, index) => (
          <SwiperSlide className={styles.slide} key={card.id}>
            <Image
              src={card.src}
              alt={card.alt}
              width={350}
              height={500}
              priority={index === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
