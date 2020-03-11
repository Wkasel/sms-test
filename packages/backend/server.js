const { ApolloServer, gql } = require("apollo-server");
const chalk = require("chalk");
const utils = require("@sms-test/common");
const schema = {
  typeDefs: gql`
    type Query {
      phonenumber: String!
    }
    type Phone {
      phonenumber: String!
    }
    type Mutation {
      savePhoneNumber(phonenumber: String!): Phone
    }
    schema {
      query: Query
      mutation: Mutation
    }
  `,
  resolvers: {
    Query: {
      phonenumber: (obj, args, ctx) => ({ obj, args, ctx })
    },
    Mutation: {
      savePhoneNumber(obj, { phonenumber }) {
        return { status: "success", phonenumber };
      }
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

app.listen().then(args => {
  utils.debug(args);
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
