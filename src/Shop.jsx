import Button from 'react-bootstrap/Button';
import './shopping.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Item from './card'; 


function Butt() {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div className="shopping">
      <h1>Shop Now</h1>
      <p>Discover the latest trends and styles in our collection.</p>
      <Button onClick={() => navigate("/pricing")} className="shopp">
        Start Shopping
      </Button>
    </div>
  );
}

export default Butt;