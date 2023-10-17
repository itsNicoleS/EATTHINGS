const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/auth');


const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  
});


userSchema.pre('save', async function(next) {
  const user = this;
  if (!user.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  next();
});

// userSchema.methods.generateAuthToken = function () {
//   return generateToken(this);
// };
// // set up pre-save middleware to create password
// userSchema.pre('save', async function(next) {
//   if (this.isNew || this.isModified('password')) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }

//   next();
// });

// // compare the incoming password with the hashed password
// userSchema.methods.isCorrectPassword = async function(password) {
//   return await bcrypt.compare(password, this.password);
// };

const User = model('User', userSchema);

module.exports = User;
