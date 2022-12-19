import gql from 'graphql-tag';

export const registerUser = gql`
  mutation registerUser($newUser: RegisterUserRequest!) {
    registerUser(newUser: $newUser) {
      isSuccess
    }
  }
`;
