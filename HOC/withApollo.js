import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';


function createApolloClient(initialState = {}) {
  
  return new ApolloClient({
    uri: 'http://localhost:3000/api/chuck',
    cache: new InMemoryCache().restore(initialState)
  });
}


export default withApollo(createApolloClient, {
  render: ({ Page, props }) => {
    return (
      <ApolloProvider client={props.apollo}>
        <Page {...props} />
      </ApolloProvider>
    );
  }
});
