import {
  ApolloClient, ApolloLink, HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { ErrorResponse, onError } from '@apollo/client/link/error';
import config from '../config';

const httpLink = new HttpLink({
  uri: config.graphqlUrl,
  credentials: 'include',
});

const errorLink = onError((errorResponse: ErrorResponse) => {
  const { networkError } = errorResponse;
  if (networkError) {
    /* TODO HANDLE THE ERRORS */
    // eslint-disable-next-line no-console
    console.error(networkError);
  }
});

const client: ApolloClient<object> = new ApolloClient<object>({
  cache: new InMemoryCache(({
    addTypename: false,
  })),
  link: ApolloLink.from([
    errorLink,
    httpLink,
  ]),
});

export default client;
