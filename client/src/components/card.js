import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useParams, } from 'react-router-dom';
import platter from '../assets/platterPic.jpg';
import injera from '../assets/injeraPic.jpg';
import coffee from '../assets/coffeePic.webp';
import tibs from '../assets/tibs.webp';
import shiro from '../assets/shiroPic.webp';



export default function MenuCard({ loggedIn, setLoggedIn }) {
  const data = [
    {
      itemID: 1,
      name: "Tibs",
      description: "Sliced beef or lamb, pan-fried in butter, garlic and onion.",
      price: 10.00,
      secret: false,
      imageURL: tibs
    },
    {
      itemID: 2,
      name: "Doro Wat",
      description: "Doro wot is made with chicken drumsticks cooked and served in a hot sauce of spices.",
      price: 10.00,
      secret: false,
      imageURL: platter
    },
  
    {
      itemID: 4,
      name: "Injera",
      description: "Pancake-like flatbread with a slightly spongy texture.",
      price: 10.00,
      secret: false,
      imageURL: injera
    },
    {
      itemID: 5,
      name: "Ethiopian Coffee",
      description: "Brewed fresh!",
      price: 10.00,
      secret: true,
      imageURL: coffee
    },
    {
      itemID: 3,
      name: "Shiro",
      description: "A highly seasoned puree of chickpeas served in a clay pot.",
      price: 10.00,
      secret: true,
      imageURL: shiro
    },
  ]

  const { itemID } = useParams();


  // const menuItem = props.data.find(item => item.itemID === parseInt(itemID, 10));
  return (
    <Section>
      <div className='title'>
        <h1>
          <span>Top Favorites</span>
        </h1>
      </div>

      <div className='card '>
        <CardGroup>
          {data.map((menuItem) => (        
              (menuItem.secret && loggedIn == false) ? null : (
              <Card style={{ width: '20em' }}>
                <Card.Img variant="top" src={menuItem.imageURL} />
                <Card.Body>
                  <Card.Title>{menuItem.name}</Card.Title>
                  <Card.Text>
                    {menuItem.description}
                  </Card.Text>
                  <Button variant="primary"> ORDER </Button>
                </Card.Body>
              </Card>
            )
          )
            
          )
              }
        </CardGroup>
      </div>
    </Section>
  );
};


const Section = styled.section`
display: grid;

.card {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    justify-content: center;
    align-items: center;
    h3 {
      color: #fc4958;
    }
    p {
      text-align: center;
      font-size: 1.1rem;
      line-height: 2rem;
      letter-spacing: 0.1rem;
    }
   
    .image {
      max-height: 20rem;
      overflow: hidden;
      border-radius: 1rem;
      img {
        height: 20rem;
        width: 15rem;
        object-fit: cover;
      }
    }
    button {
      border: none;
      padding: 1rem 4rem;
      font-size: 1.4rem;
      color: black;
      border-radius: 4rem;
      transition: 0.5s ease-in-out;
      cursor: pointer;
      background: linear-gradient(to right, #fc4958, #e85d04);
      text-transform: uppercase;
      &:hover {
        background: linear-gradient(to right, #e85d04, #fc4958);
      }
    }
  }
}

@media screen and (min-width: 280px) and (max-width: 720px) {
  .products {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}
@media screen and (min-width: 720px) and (max-width: 1080px) {
  .products {
    grid-template-columns: repeat(2, 1fr);
  }
}
`;