const { ApolloServer, gql } = require("apollo-server");
const chalk = require("chalk");
const PORT = 4000;
const schema = {
  typeDefs: gql`
    type Query {
      hello: String!
    }
    schema {
      query: Query
    }
  `,
  resolvers: {
    Query: {
      hello: () => "world"
    }
  }
};

const { typeDefs, resolvers } = schema;

const app = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    settings: {
      "editor.theme": "dark"
    },
    tabs: [
      {
        endpoint: "/graphql",
        query: schema.resolvers.Query.hello
      }
    ]
  }
});
// app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

app.listen().then(args => {
  console.log("SERVER DEBUG OUTPUT ABOVE ^^");
  console.log(
    `
    -----------
    ${chalk.green(`Serving the GraphQL Playground on ${args.url}/playground`)}
    ${chalk.green(
      `Apollo Server running GQL endpoint at ${args.url}${args.subscriptionsPath}`
    )}
    `
  );
});
