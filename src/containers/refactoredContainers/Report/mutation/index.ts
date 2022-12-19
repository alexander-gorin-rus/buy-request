import gql from 'graphql-tag';

export const createReport = gql`
  mutation createReport($createReportData: CreateReportInput!) {
    createReport(createReportData: $createReportData) {
      isSuccess
    }
  }
`;
