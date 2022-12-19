import { FetchResult } from '@apollo/client';
import apolloClient from './client';
import { ApolloMutationParams } from './interfaces';

export default function* mutate(
  params: ApolloMutationParams,
): Generator<Promise<FetchResult<object>>> {
  const res:any = yield apolloClient.mutate({
    mutation: params.mutation,
    variables: params.variables || null,
    errorPolicy: 'all',
  });
  if (res.errors) {
    const [error] = res.errors;
    throw error.extensions.code;
  }
  return res;
}
