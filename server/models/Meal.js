const { Schema, model } = require('mongoose');

const mealSchema = new Schema({
    name: {
        type: String,
        minlength: 1,
        maxlength: 100,
        require: true,
        trim: true,
    },
    description: {
        type: String,
        minlength:1,
        maxlength:200,
        trim: true,
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
    },
    categories: [{
        type: Schema.Types.ObjectId,
        ref: "Category",
    }]
})

const Meal = model("Meal", mealSchema)

module.exports = Meal
