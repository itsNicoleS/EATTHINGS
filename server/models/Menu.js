const { Schema, model } = require('mongoose');

const menuSchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    }
})

const Menu = model("Menu", menuSchema)

module.exports = Menu
