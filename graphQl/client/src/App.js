import Table from "./Table";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

let client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:3444/graphql",
  }),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <section className="container-fluid">
          <section className="row">
            <section className="col-8 m-auto">
              <Table />
            </section>
          </section>
        </section>
      </ApolloProvider>
    </>
  );
}

export default App;

// create a client of graphql
// set client to graphql provider
// set a query
// call a query
