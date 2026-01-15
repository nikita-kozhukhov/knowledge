import { memo } from 'react';

import type { ParallaxData } from '@/api/mockParallax';

import styles from '../Parallax.module.scss';

type SlideProps = Omit<ParallaxData, 'id'>;

function Slide({ title, subtitle, text }: SlideProps) {
  return (
    <>
      <div className={styles.title} data-swiper-parallax="-300">
        {title}
      </div>
      <div className={styles.subtitle} data-swiper-parallax="-200">
        {subtitle}
      </div>
      <div className={styles.text} data-swiper-parallax="-100">
        <p>{text}</p>
      </div>
    </>
  );
}

export default memo(Slide);
