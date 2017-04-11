import React from 'react';
import { List } from 'stardust';
import { graphql } from 'react-apollo';
import HandleVote from './HandleVote';
import { urlListQuery } from '../graphql/urlQuery';

const UrlList = ({ data: { loading, error, urls, refetch } }) => {
    if (loading) {
        return <p>Loading ...</p>
    }

    if (error) {
        return <p>{ error.message }</p>
    }

    refetch();

    return (
        <List key={ Date() }>
            { urls.map(url =>
                <List.Item key={url._id }>
                    <List.Header>
                        { url.title }
                        <HandleVote url={ url } vote={ url.vote.up } action='up' refetch={ refetch } />
                        <HandleVote url={ url } vote={ url.vote.down } action='down' refetch={ refetch } />
                    </List.Header>
                    { url.url }
                </List.Item>
            ) }
        </List>
    );
};

var UrlListWithData = graphql(urlListQuery)(UrlList);

export default { UrlListWithData, UrlList };