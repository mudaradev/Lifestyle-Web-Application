import Carousel from 'react-bootstrap/Carousel';
import './side.css';

function Slide() {
  return (
    <Carousel>

      <Carousel.Item className='carousel-item1'>
        <Carousel.Caption>
          <h3>In This Avurudu Season</h3>
          <p>Get A 20% Discount With Us</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='carousel-item2'>
        <Carousel.Caption>
          <h3>Celebrate New Beginnings</h3>
          <p>Enjoy Free Shipping on All Order</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='carousel-item3'>
        <Carousel.Caption>
          <h3>Seasonal Vibes Only</h3>
          <p>
          Buy 1 Get 1 Free on Selected Items
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default Slide;