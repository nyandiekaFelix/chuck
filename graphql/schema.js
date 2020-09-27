import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './type-defs.js';
import resolvers from './resolvers.js';

export default makeExecutableSchema({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
});
