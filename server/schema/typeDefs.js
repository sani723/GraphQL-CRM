const { gql } = require("apollo-server");

const typeDefs = gql`
  # Contact type
  type Contact {
    id: ID! # Unique id for contact
    firstName: String 
    lastName: String
    fullName: String
    avatarUrl: String 
  }
  
  type Query {
    getContact(id: ID): Contact
    getContacts(limit: Int): [Contact]
    totalContacts: Int
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, avatarUrl: String!): Contact
  }

`;


module.exports = typeDefs;