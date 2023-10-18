const Category = require('../models/Category');
const Meal = require('../models/Meal');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const resolvers = {
    Query: {
    
      meals: async () => {
        try {
          return await Meal.find().populate("categories");
        } catch (error) {
          throw new Error('Error fetching menu items');
        }
      },
      categories: async () => {
        try {
          return await Category.find();
        } catch (error) {
          throw new Error('Error fetching categories');
        }
      },
    },
    Mutation: {
      signup: async (_, { firstName, lastName, email, password }) => {
        try {
          const existingUser = await User.findOne({ email });
          console.log(existingUser,firstName)
          if (existingUser) {
            throw new Error('User with this email already exists');
          }
  
         // const hashedPassword = await bcrypt.hash(password, 10);
          const user = await User.create({
            firstName,
            lastName,
            email,
            password
          });
  
          
          const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });
          return {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token,
          };
        
        } catch (error) {
          throw new Error('Error signing up');
        }
      },
      login: async (_, { email, password }) => {
        try {
          const user = await User.findOne({ email });
          if (!user) {
            throw new Error('User not found');
          }
          console.log(user, password)
          const validPassword = await user.isCorrectPassword(password)
          console.log(validPassword)
          if (!validPassword) {
            throw new Error('Invalid password');
          }
          console.log(validPassword)
          const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });
          console.log(token)
          return {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token,
          };
        } catch (error) {
          throw new Error('Error logging in');
        }
      },
    },
  };
  module.exports = resolvers;