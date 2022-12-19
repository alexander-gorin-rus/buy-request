import { ApolloQueryResult } from '@apollo/client';
import apolloClient from './client';
import { ApolloQueryParams } from './interfaces';

export default function* query(
  params: ApolloQueryParams,
): Generator<Promise<ApolloQueryResult<object>>> {
  const res:any = yield apolloClient.query({
    query: params.query,
    variables: params.variables || null,
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  });
  if (res.errors) {
    const [error] = res.errors;
    throw error.extensions.code;
  }
  return res;
}
