'use client';

import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import { carouselData } from '@/api/mockCarousel';

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './Carousel.module.scss';

export default function Carousel() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [active, setActive] = useState<number>(0);

  const handleSwiper = useCallback((s: SwiperType) => {
    swiperRef.current = s;
  }, []);

  const handleSlideChange = useCallback((s: SwiperType) => {
    setActive(s.activeIndex);
  }, []);

  return (
    <div className={styles.carousel_container}>
      <h2 className={styles.carousel_header}>Слайдер - Карусель</h2>
      <Swiper
        modules={[Pagination]}
        slidesPerView="auto"
        centeredSlides
        spaceBetween={-350}
        onSwiper={handleSwiper}
        onSlideChange={handleSlideChange}
        pagination={{
          el: '.custom-pagination',
          clickable: true,
        }}
        className={styles.slider}
      >
        {carouselData.map((image, index) => {
          const distance = Math.abs(index - active);
          const isVisible = distance <= 2;

          return (
            <SwiperSlide key={image.id} className={styles.swiperSlide}>
              <div
                className={styles.slide}
                data-visible={isVisible}
                style={{
                  transform: `scale(${1 - distance * 0.12})`,
                  filter: `blur(${distance * 1.2}px)`,
                  zIndex: 20 - distance,
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={250}
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* пагинация */}
      <div className={styles.pagination}>
        <button
          aria-label="Перейти к первому слайду"
          onClick={() => swiperRef.current?.slideTo(0)}
        >
          ←
        </button>

        <div className="custom-pagination" />

        <button
          aria-label="Перейти к последнему слайду"
          onClick={() => swiperRef.current?.slideTo(carouselData.length - 1)}
        >
          →
        </button>
      </div>
    </div>
  );
}
