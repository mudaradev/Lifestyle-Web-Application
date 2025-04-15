import Carousel from 'react-bootstrap/Carousel';

import './side.css';

function UncontrolledExample() {
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
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='carousel-item3'>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default UncontrolledExample;