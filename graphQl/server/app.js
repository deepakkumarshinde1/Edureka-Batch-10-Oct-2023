const express = require("express");
const graphqlHTTPService = require("express-graphql");
// create a express server
const server = express();
const schema = require("./schema");

// rest api GET , POST , PUT , DELETE
// one end point
// client -- request --> server
// server -- response --> client
server.all(
  "/graphql",
  graphqlHTTPService({
    schema,
    graphiql: true,
  })
);

server.listen(3444, () => {
  console.log("server is started on port", 3444);
});
