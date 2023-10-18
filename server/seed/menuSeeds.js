const menuJson = require('./menu.json');
const { Menu } = require('../models')
const connection = require('../config/connection')

connection.once('open', async () => {
    const menus = await Menu.insertMany([
        [ 
            {
          
            "name": "Tibs", 
            "description": "<p> Sliced beef or lamb, pan-fried in butter, garlic and onion. </p>" ,  
            "price": 10.00, 
            "categories": "Entree",
            "isSeceret": false, 
            
            // "menuId": "652a1f0f5f0f53b036959a65"
        }, 
        { 
         
            "name": "Doro Wat", 
            "description": " <p> Doro wot is made with chicken drumsticks cooked and served in a hot sauce of spices. </p>" ,
            "price": 10.00, 
            "categories": "Entree",
            "isSeceret": false, 
            
            // "menuId": "652a1f0f5f0f53b036959a66"
        }, 
        { 
           
            "name": "Shiro", 
            "description": "<p> A highly seasoned puree of chickpeas served in a clay pot. </p>" ,
            "price": 10.00, 
            "categories": "Entree", 
            "isSeceret": true,
           
        }, 
        { 
            
            "name": "Injera", 
            "description": "<p> Pancake-like flatbread with a slightly spongy texture. </p>" ,
            "price": 10.00, 
            "categories": "regMenu", 
            "isSeceret": false,
            
        }, 
        { 
           
            "name": "Ethiopian Coffee", 
            "description": "<p> Brewed fresh! </p>" ,
            "price": 10.00, 
            "categories": "Dessert", 
            "isSeceret": true,
            
        } 
        ]
    ]);

    process.exit()
}) 