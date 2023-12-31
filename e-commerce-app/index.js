const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { db } = require("./db");
const { Query } = require("./resolvers/Query");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");
const { Mutation } = require("./resolvers/Mutation");


const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Category,
        Product,
        Mutation
    },
    context: {
        db,
    }
});

server.listen({ port: 4003}).then(({ url }) => {
    console.log("Server is ready at " + url);
});