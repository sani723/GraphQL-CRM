const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema/typeDefs");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://sajjad:test123@ds163610.mlab.com:63610/crm",
  { useNewUrlParser: true }
);
mongoose.connection.once("open", () => {
  console.log("Connected to database");
});

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => console.log(`🚀  Server ready at ${url}`));