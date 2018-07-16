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

  type Campaign {
    CampaignId: Int,
    ProductCode: String,
    ProductTitle: String,
    Category: String,
    CategoryTitle: String,
    CampaignCode: String,
    DisplayPercentageSold: String,
    ProductPrice: Int,
    ProductPriceAed: Int,
    ProductImage: String,
    MobileProductImage: String,
    PrizeTitle: String,
    PrizeImage: String,
    WebpageUrl: String,
    TotalCount: Int,
    UnitsRemaining: Int,
    ProductIntro: String
  }
  
  type Query {
    getContact(id: ID): Contact
    getContacts(limit: Int): [Contact]
    totalContacts: Int,
    getCampaigns: [Campaign]
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, avatarUrl: String!): Contact
  }

`;


module.exports = typeDefs;