import { DocumentNode } from 'graphql';

export interface ApolloQueryResultData {
  data: object,
  error?: object,
  loading: boolean,
  networkStatus: number
}

export interface ApolloQueryParams {
  query: DocumentNode,
  variables: object,
}

export interface ApolloMutationParams {
  mutation: DocumentNode,
  variables: object,
}
