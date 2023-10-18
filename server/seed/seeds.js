const mealJson = require('./meals.json');
const { Menu, Category, Meal } = require('../models')
const categoryJson = require('./categories.json');

const connection = require('../config/connection')

connection.once('open', async () => {
    const categories = await Category.insertMany(categoryJson)
    const categoriesIds = categories.map(item => item._id)
    const mcIds = mealJson.map((item, index) => {
        if (index === 4 ) {
            return {...item, categories: [categoriesIds[2], categoriesIds[3]]}
        }
        if (index === 3) {
            return {...item, categories: [categoriesIds[0]]}
        }
        if (index === 2) {
            return {...item, categories: [categoriesIds[0], categoriesIds[3]]}
        }
        if (index === 1) {
            return {...item, categories: [categoriesIds[1]]}
        }
        if (index === 0) {
            return {...item, categories: [categoriesIds[1]]}
        }

    })
    const meals = await Meal.insertMany(mcIds);
    const mealIds = meals.map(item => item._id)
    const menu = await Menu.insertMany( [{name: "Menu", description: "All the food you need", meals: mealIds}]) 
    console.log(meals, menu)
    process.exit()
}) 