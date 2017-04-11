import React from 'react';
import { expect } from 'chai';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { shallow, mount, render } from 'enzyme';

import AppApollo from '../src/component/AppApollo';
import { ApolloProvider } from 'react-apollo';

describe('Test src/component/AppApollo.js', () => {
    it('renders App < /> components', () => {
        var wrapper = shallow(<AppApollo />);
        var apolloClient = 'fakeApolloClient';
        wrapper.setState({ apolloClient });

        expect(wrapper.equals(<ApolloProvider client={ apolloClient }></ApolloProvider>)).to.equal(true);
    });

    it('renders App < /> components with childs', () => {
        var wrapper = shallow(<AppApollo><div>Hello</div></AppApollo>);
        var apolloClient = 'fakeApolloClient';
        wrapper.setState({ apolloClient });

        expect(wrapper.equals(<ApolloProvider client={ apolloClient }><div>Hello</div></ApolloProvider>)).to.equal(true);
    });
});
