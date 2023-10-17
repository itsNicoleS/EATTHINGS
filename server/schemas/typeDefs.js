const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Category {
    _id: ID
    name: String
}
type  Meal {
    _id: ID
    name: String
    description: 
    price: Float
    image:
    isSeceret: Boolean
}

type User {
    _id: ID
    username: String
    email: String

type Query {
    categories: [Category]
    meals: [Meal]
    secertMeals: [Meals]
}
type Mutation {
    signup(username: String, email: String, password: String): User
    login(email: String, password: String): User
  }
`
module.exports = typeDefs;