import { gql } from 'react-apollo';

const voteUpMutation = gql`
  mutation voteUp($id: String!) {
    voteUp(_id: $id) {
      _id
    }
  }
`;

const voteDownMutation = gql`
  mutation voteDown($id: String!) {
    voteDown(_id: $id) {
      _id
    }
  }
`;

export { voteUpMutation, voteDownMutation };
