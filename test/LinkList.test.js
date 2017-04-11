import React from 'react';
import { expect } from 'chai';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { shallow, mount, render } from 'enzyme';

import { List } from 'stardust';
import LinkList from '../src/component/LinkList';
import HandleVote from '../src/component/HandleVote';

describe('Test src/component/LinkList.js', () => {
    it('renders LinkList.UrlList < /> components', () => {
        var refetch = function () {
            // use refetch
            expect(true).to.equal(true);
        };

        var serverData = {
            loading: false,
            error: null,
            urls: [
                {
                    _id: '_id',
                    title: 'title',
                    vote: {
                        up: 1,
                        down: 2
                    }
                }
            ],
            refetch
        };

        const wrapper = shallow(<LinkList.UrlList data={ serverData } />);

        expect(wrapper.equals(<List key={ Date() }>
            { serverData.urls.map(url =>
                <List.Item key={ url._id }>
                    <List.Header>
                        { url.title } 
                        <HandleVote url={ url } vote={ url.vote.up } action='up' refetch={ refetch } />
                        <HandleVote url={ url } vote={ url.vote.down } action='down' refetch={ refetch } />
                    </List.Header>
                    { url.url }
                </List.Item>
            ) }
        </List>)).to.equal(true);
    });

    it('renders LinkList.UrlList < /> components loading', () => {
        var refetch = function () {
            // no refetch
            expect(true).to.equal(false);
        };

        var serverData = {
            loading: true,
            error: null,
            urls: [
                {
                    _id: '_id',
                    title: 'title',
                    vote: {
                        up: 1,
                        down: 2
                    }
                }
            ],
            refetch
        };

        const wrapper = shallow(<LinkList.UrlList data={ serverData } />);

        expect(wrapper.equals(<p>Loading ...</p>)).to.equal(true);
    });

    it('renders LinkList.UrlList < /> components error', () => {
        var refetch = function () {
            // no refetch
            expect(true).to.equal(false);
        };
        var errorMessage = 'LinkList Error message';

        var serverData = {
            loading: false,
            error: { message: errorMessage },
            urls: [
                {
                    _id: '_id',
                    title: 'title',
                    vote: {
                        up: 1,
                        down: 2
                    }
                }
            ],
            refetch
        };

        const wrapper = shallow(<LinkList.UrlList data={ serverData } />);

        expect(wrapper.equals(<p>{ errorMessage }</p>)).to.equal(true);
    });
});
