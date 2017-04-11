import React, { Component } from 'react';
import { ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo';
import config from '../../conf/config';

class AppApollo extends Component {
    constructor(props) {
        super(props);

        const networkInterface = createNetworkInterface({
            uri: config.apollo.host + ':' + config.apollo.port + '/' + config.apollo.route
        });

        const apolloClient = new ApolloClient({
            networkInterface: networkInterface
        });

        this.state = { apolloClient }
    }

    render() {
        return (
            <ApolloProvider client={ this.state.apolloClient }>
                { this.props.children }
            </ApolloProvider>
        );
    }
}

export default AppApollo;