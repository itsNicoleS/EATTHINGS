const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
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
})

const Category = model("Category", categorySchema)

module.exports = Category
