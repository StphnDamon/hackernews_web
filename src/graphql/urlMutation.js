import { gql } from 'react-apollo';

const addUrlMutation = gql`
  mutation addUrl($url: String!) {
    addUrl(url: $url) {
      url
    }
  }
`;

export { addUrlMutation };
