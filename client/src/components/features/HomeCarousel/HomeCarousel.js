import Carousel from 'react-bootstrap/Carousel';
import styles from './HomeCarousel.module.scss';

const HomeCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item className={styles.slide}>
        <img
          className={'d-block w-100 ' + styles.slide_image}
          src="./images/colt.webp"
          alt="First slide"
          height="500px"
        />
        <Carousel.Caption className={styles.carousel_content}>
          <h3>Colt 1911</h3>
          <p>The M1911, also known as Colt 1911 or Colt Government</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.slide}>
        <img
          className={'d-block w-100 ' + styles.slide_image}
          src="./images/glock19.webp"
          alt="Second slide"
          height={'500px'}
        />
        <Carousel.Caption className={styles.carousel_content}>
          <h3>Glock 19 gen 5</h3>
          <p>Austrian manufacturer Glock Ges.m.b.H.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.slide}>
        <img
          className={'d-block w-100 ' + styles.slide_image}
          src="./images/hk416.webp"
          alt="Third slide"
          height={'500px'}
        />
        <Carousel.Caption className={styles.carousel_content}>
          <h3>HK416</h3>
          <p>
            The Heckler & Koch.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;