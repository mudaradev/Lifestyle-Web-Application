import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css';
function Item() {
    return (
        <div className="item" style={{ display: 'flex', gap: '1rem' }}>
            <Card style={{ width: '18rem' }} className='card'>
                <Card.Img variant="top" src={require('./sofa2.jpg')}  className='img'/>
                <Card.Body>
                    <Card.Title>Curved Sofa</Card.Title>
                    <Card.Text>
                    This elegant curved design adds a touch of luxury and sophistication to your home.
                    </Card.Text>
                    <Button className='shop-but' variant="primary">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className='card'>
                <Card.Img variant="top" src={require('./sofa3.jpg')}  className='img'/>
                <Card.Body>
                    <Card.Title>Soft Sofa</Card.Title>
                    <Card.Text>
                    This elegant curved design adds a touch of luxury and sophistication to your home.
                    </Card.Text>
                    <Button className='shop-but' variant="primary">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className='card'>
                <Card.Img variant="top" src={require('./sofa6.jpg')}  className='img'/>
                <Card.Body>
                    <Card.Title>Soft Sofa</Card.Title>
                    <Card.Text>
                    This elegant curved design adds a touch of luxury and sophistication to your home.
                    </Card.Text>
                    <Button className='shop-but' variant="primary">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className='card'>
                <Card.Img variant="top" src={require('./sofa6.jpg')} className='img' />
                <Card.Body>
                    <Card.Title>Soft Sofa</Card.Title>
                    <Card.Text>
                    This elegant curved design adds a touch of luxury and sophistication to your home.
                    </Card.Text>
                    <Button className='shop-but' variant="primary">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className='card'>
                <Card.Img variant="top" src={require('./sofa7.webp')}   className='img'/>
                <Card.Body>
                    <Card.Title>Soft Sofa</Card.Title>
                    <Card.Text>
                    This elegant curved design adds a touch of luxury and sophistication to your home.
                    </Card.Text>
                    <Button className='shop-but' variant="primary">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className='card'>
                <Card.Img variant="top" src={require('./sofa8.jpeg')}  className='img' />
                <Card.Body>
                    <Card.Title>Soft Sofa</Card.Title>
                    <Card.Text>
                    This elegant curved design adds a touch of luxury and sophistication to your home.
                    </Card.Text>
                    <Button className='shop-but' variant="primary">Add To Cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
  }
  export default Item;