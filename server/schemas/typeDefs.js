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
}
type Auth {
    token: ID
    user: User
}
type Query {
    categories: [Category]
    meals: [Meal]
    me: User
    nonSecret: [Meal]
    isSecret: [Meal]
}
type Mutation {
    signup(firstName: String, lastName: String, email: String, password: String): Auth
    login(email: String, password: String): Auth
  }
`
module.exports = typeDefs;