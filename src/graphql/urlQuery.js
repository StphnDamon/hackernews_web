import { gql } from 'react-apollo';

const urlListQuery = gql`
    query UrlListQuery {
        urls {
            _id
            url
            title
            vote {
                up
                down
            }
        }
    }
`;

export { urlListQuery };
