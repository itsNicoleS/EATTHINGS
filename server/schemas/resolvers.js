
const { Category, Meal, User } = require('../models');
const { signToken } = require('../utils/auth')


const resolvers = {
  Query: {
    nonSecret: async (parent, args, context) => {
     
        // const categoryId = await Category.findOne({name: 'isSecret'})
        const menuItems = await Meal.find({ isSecret: false });
        return menuItems

    },
    isSecret: async (parent, args, context) => {
      if (context.user) {
        // const categoryId = await Category.findOne({name: 'isSecret'})
        const menuItems = await Meal.find({ $or: [{isSecret: true }, {isSecret: false }]});
        return menuItems

      }

      throw new Error('Not logged in');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id)

        return user;
      }

      throw new Error('Not logged in');
    },
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
    signup: async (_, args) => {
      try {
        const user = await User.create(args);

        const token = signToken(user)
        return { token, user }

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

        const validPassword = await user.isCorrectPassword(password)

        if (!validPassword) {
          throw new Error('Invalid password');
        }

        const token = signToken(user)
        return { token, user }

      } catch (error) {
        console.log(error);
        throw new Error('Error logging in');
      }
    },
  },
};
module.exports = resolvers;