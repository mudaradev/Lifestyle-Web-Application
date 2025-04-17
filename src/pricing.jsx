import Item from "./card";
import Navi from './navbar.jsx';
import './card.css';
import React from 'react';
import './pricing.css';

function Pricing() {

    return (
      <div className="pricing">
       
        <Navi/>
        <div className="heading">
        <h1 className="topic">Pricing</h1>
        <p className="para">Choose the plan that suits you best.</p>
        </div>
        <Item/>
      </div>
    );
  }
  export default Pricing; 
  