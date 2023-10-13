const { Schema, model } = require('mongoose');

const menuSchema = new Schema({
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
    meals: [{
        type: Schema.Types.ObjectId,
        ref: "Meal",
    }]
})

const Menu = model("Menu", menuSchema)

module.exports = Menu
