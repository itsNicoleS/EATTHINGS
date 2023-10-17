const menuJson = require('./menu.json');
const { Category } = require('../models')
const connection = require('../config/connection')

connection.once('open', async () => {
    const categories = await Category.insertMany([
        {
            name: 'Appetizer',
        },
        {
            name: "Entree",
        },
        {
            name: "Dessert",
        }
    ])

    process.exit()
}) 