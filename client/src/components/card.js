import React from 'react';
import Meal from 'Meals.js'

export default function Card(props) {
  const cardStyle = {
    width: '18rem',
  };

  // Helper function that generates a random width for our placeholder images
  const randomWidth = () => {
    const number = Math.random() * (300 - 200) + 200;
    return number.toString().split('.')[0];
  };

  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={` `}
          alt="Card cap"
        />
        <div className="card-body">
          <p className="card-text">itemID: {props.id}</p>
          <h5 className="card-title">Name: {props.name}</h5>
          <p className="card-text">Description: {props.description}</p>
          <p className="card-text">price: {props.price}</p>
          <p className="card-text">category: {props.category}</p>
          <p className="card-text">imageURL: {props.imageURL}</p>


          <a href="#" className="btn btn-primary">
            ORDER {props.name}
          </a>
        </div>
      </div>
    </div>
  );
}