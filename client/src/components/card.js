import React from 'react';
import { useParams } from 'react-router-dom';

export default function Card(props) {
  const cardStyle = {
    width: '18rem',
  };

  const { itemID } = useParams();

  const menuItem = props.menuItems.find(item => item.itemID === parseInt(itemID, 10));

  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <img className="card-img-top" src={menuItem.imageURL} alt={menuItem.name} />
        <div className="card-body">
          <p className="card-text">itemID: {menuItem.itemID}</p>
          <h5 className="card-title">Name: {menuItem.name}</h5>
          <p className="card-text">Description: {menuItem.description}</p>
          <p className="card-text">Price: ${menuItem.price.toFixed(2)}</p>
          <p className="card-text">Category: {menuItem.category}</p>
          {/* <a>className="btn btn-primary"</a>
            ORDER {menuItem.name} */}
        </div>
      </div>
    </div>
  );
}