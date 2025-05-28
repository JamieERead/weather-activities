import { ApolloClient, InMemoryCache } from "@apollo/client";

const graphqlUri = process.env.REACT_APP_GRAPHQL_API_URL;

if (!graphqlUri) {
  throw new Error("Missing REACT_APP_GRAPHQL_API_URL in environment.");
}

const client = new ApolloClient({
  uri: graphqlUri,
  cache: new InMemoryCache(),
});

export default client;
