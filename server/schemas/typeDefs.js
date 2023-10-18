const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Category {
    _id: ID
    name: String
}
type Meal {
    _id: ID
    name: String
    description: String
    price: Float
    image: String
    categories: [Category]
}

type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    token: String
}
type Query {
    categories: [Category]
    meals: [Meal]
}
type Mutation {
    signup(firstName: String, lastName: String, email: String, password: String): User
    login(email: String, password: String): User
  }
`
module.exports = typeDefs;