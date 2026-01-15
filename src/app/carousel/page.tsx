import CarouselComponent from './components/carousel/Carousel';
import Cube from './components/cube/Cube';
import Banner from './components/banner/Banner';
import Parallax from './components/parallax/Parallax';
import Cards from './components/cards/Cards';

import styles from './Carousel.module.scss';

export default function Carousel() {
  return (
    <section className={styles.carousel_container}>
      <h1 className={styles.carousel_header}>
        Примеры работы с баннерами и изображениями
      </h1>

      {/* паралакс */}
      <Parallax />

      {/* баннер */}
      <Banner />

      {/* карусель */}
      <CarouselComponent />

      {/* куб */}
      <Cube />

      {/* карты */}
      <Cards />
    </section>
  );
}
