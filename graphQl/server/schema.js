const graphql = require("graphql");
const Query = require("./Querys");
const { GraphQLSchema, GraphQLObjectType } = graphql;

let QueryInstance = new GraphQLObjectType({
  name: "QueryInstance",
  fields: Query,
});

let schema = new GraphQLSchema({
  query: QueryInstance,
});

// query (read)

module.exports = schema;
