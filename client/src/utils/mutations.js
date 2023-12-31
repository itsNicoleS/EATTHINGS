import { gql } from "@apollo/client";


export const SIGNUP = gql`
    mutation signup($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
        signup(firstName: $firstName, lastName: $lastName, email: $email, password:$password) { 
            token
            user {
                _id
                firstName
                lastName
                email
            }
        }
    }
`

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) { 
        login(email: $email, password: $password) { 
            token 
            user { 
                _id
                email
               firstName
               lastName
            }
        }
    }
`