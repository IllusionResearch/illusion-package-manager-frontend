import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client/core";

const link = createHttpLink({ uri: "https://localhost:5001/graphql" });

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({ link, cache });
