const Category = require('../models/Category');
const Meal = require('../models/Meal');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const auth = require('../utils/auth');

// const resolvers = {
//     Query: {
//         menuItems: async (_, __, context) => {
//             let menuItems;
      
//             if (context.user) {
//               // User is signed in, show both regular and secret menu items
//               menuItems = await Meal.find();
//             } else {
//               // User is not signed in, show only regular menu items
//               menuItems = await Meal.find({ isSecret: false });
//             }
      
//             return menuItems;
//           },
//       categories: async () => {
//         try {
//           const categories = await Category.find();
//           return categories;
//         } catch (error) {
//           throw new Error('Error fetching categories');
//         }
//       },
//       meals: async () => {
//         try {
//           const meals = await Meal.find({ isSecret: false });
//           return meals;
//         } catch (error) {
//           throw new Error('Error fetching meals');
//         }
//       },
//       secretMeals: async () => {
//         try {
//           const secretMeals = await Meal.find({ isSecret: true });
//           return secretMeals;
//         } catch (error) {
//           throw new Error('Error fetching secret meals');
//         }
//       }
//     },
//     Meal: {
//       category: async (parent) => {
//         try {
//           const category = await Category.findById(parent.category);
//           return category;
//         } catch (error) {
//           throw new Error('Error fetching meal category');
//         }
//       }
//     }
//   };
const resolvers = {
    Query: {
      users: async () => {
        try {
          return await User.find();
        } catch (error) {
          throw new Error('Error fetching users');
        }
      },
      meal: async () => {
        try {
          return await Meal.find();
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
      signup: async (_, { username, email, password }) => {
        try {
          const existingUser = await User.findOne({ email });
          if (existingUser) {
            throw new Error('User with this email already exists');
          }
  
          const hashedPassword = await bcrypt.hash(password, 10);
          const user = new User({
            username,
            email,
            password: hashedPassword,
          });
  
          await user.save();
          return user;
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
  
          const validPassword = await bcrypt.compare(password, user.password);
          if (!validPassword) {
            throw new Error('Invalid password');
          }
  
          const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });
          return {
            _id: user._id,
            username: user.username,
            email: user.email,
            token,
          };
        } catch (error) {
          throw new Error('Error logging in');
        }
      },
    },
  };
//   module.exports = resolvers;