import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
// import { WebSocketLink } from "apollo-link-ws";
import { HttpLink } from "apollo-link-http";
import HomePage from "./pages/Home";
import theme from "./theme";

// blah dont like this hack
require("./theme/theme.css");

const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000/graphql"
  }),
  cache: new InMemoryCache(),
  connectToDevTools: true
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <HomePage />
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
