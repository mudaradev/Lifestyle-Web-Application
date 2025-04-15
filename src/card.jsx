import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css';
function Item() {
    return (
        <div className="item" style={{ display: 'flex', gap: '1rem' }}>
            <Card style={{ width: '18rem' }} className='card'>
                <Card.Img variant="top" src={require('./sofa2.jpg')} />
                <Card.Body>
                    <Card.Title>Curved Sofa</Card.Title>
                    <Card.Text>
                    This elegant curved design adds a touch of luxury and sophistication to your home.
                    </Card.Text>
                    <Button variant="primary">Add To Cart</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className='card'>
                <Card.Img variant="top" src={require('./sofa2.jpg')} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Add To Cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
  }
  export default Item;