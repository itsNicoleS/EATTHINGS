const { Schema, model } = require('mongoose');

const mealSchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
    description: {
        type: String,
     
        trim: true,
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
    },
    isSecret: {
        type: Boolean, default: false
    },
    categories: [{
        type: Schema.Types.ObjectId,
        ref: "Category",
    }],
    menuId: {
        type: Schema.Types.ObjectId,
        ref: "Menu",
    }
})

const Meal = model("Meal", mealSchema)

module.exports = Meal
