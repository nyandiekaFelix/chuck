import { ApolloServer } from 'apollo-server-micro';
import typeDefs from '../../graphql/type-defs';
import resolvers from '../../graphql/resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default server.createHandler({ path: '/api/chuck' });
