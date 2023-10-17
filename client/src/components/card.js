import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { imageZoomEffect, TitleStyles } from './reuseableStyles';
import {'platterPic.jpg', 'injeraPic.jpg'} from 'client\src\assets\plattterPic.jpg';


export default function Card(props) {
    const data = [ 
      {
      itemID : 1,
      name: "Tibs", 
      description: "<p> Sliced beef or lamb, pan-fried in butter, garlic and onion. </p>" ,  
      price: 10.00, 
      category: "regMenu", 
      imageURL: "client\src\assets\tibs.webp ",
  }, 
  { 
      itemID: 2, 
      name: "Doro Wat", 
      description: " <p> Doro wot is made with chicken drumsticks cooked and served in a hot sauce of spices. </p>" ,
      price: 10.00, 
      category: "regMenu", 
      imageURL: "client\src\assets\plattterPic.jpg "
  }, 
  { 
      itemID: 3, 
      name: "Shiro", 
      description: "<p> A highly seasoned puree of chickpeas served in a clay pot. </p>" ,
      price: 10.00, 
      category: "secretMenu", 
      imageURL: "client\src\assets\shiroPic.webp "
  }, 
  { 
      itemID: 4, 
      name: "Injera", 
      description: "<p> Pancake-like flatbread with a slightly spongy texture. </p>" ,
      price: 10.00, 
      category: "regMenu", 
      imageURL: "client\src\assets\injeraPic.jpg "
  }, 
  { 
      itemID: 5, 
      name: "Ethiopian Coffee", 
      description: "<p> Brewed fresh! </p>" ,
      price: 10.00, 
      category: "secretMenu", 
      imageURL: "client\src\assets\coffeePic.webp "
  }, 
  ]

  const { itemID } = useParams() 

  const menuItem = props.menuItems.find(item => item.itemID === parseInt(itemID, 10));
return (
 <Section>
    <div className='title'>
      <h1>
        <span>Top Favorites</span>
      </h1>
    </div>

    <div className='card'>
      {data.map((menuItem) => {
        return (
          <div className='card' key={menuItems.id}>
            <div className='image'>
              <img src './assets/plattterPic.jpg' alt = "product Image"/>
            </div>
            <h5 className="card-title">Name: {menuItem.name}</h5>
            <p className="card-text">Price: ${menuItem.price.toFixed(2)}</p>
            <p className="card-text">Description: {menuItem.description}</p>
            <a className="btn btn-primary"> ORDER {menuItem.name}</a>
          </div>
        );
      })}
      </div>
      </Section>
      );
    }

const Section = styled.section `
${TitleStyles}; 
.card { 
  display: grid; 
  grid-template-columns: repeat(4, 1fr); 
}
.image { 
  max-height: 20rem;
  img { 
    height: 20rem;
    width: 15rem;
  }
}
`; 
