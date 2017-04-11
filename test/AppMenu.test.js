import React from 'react';
import { expect } from 'chai';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { shallow, mount, render } from 'enzyme';
import { Header, Menu } from 'stardust';
import { LinkForm } from '../src/component/LinkForm';
import { LinkListWithData } from '../src/component/LinkList';

import AppMenu from '../src/component/AppMenu';

describe('Test src/component/AppMenu.js', () => {
    it('renders AppMenu < /> components', () => {
        const wrapper = shallow(<AppMenu />);
        expect(wrapper.equals(<Router>
                <div>
                    <Menu pointing secondary>
                        <Menu.Item name="home">
                            <Link to="/">Add a new URL</Link>
                        </Menu.Item>
                        <Menu.Item name="list">
                            <Link to="/list">URLs list</Link>
                        </Menu.Item>
                        <Menu.Menu position="right">
                            <Menu.Item>
                                <Header as='h4'>Hacker News</Header>
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                    <div className='App'>
                        <Route exact path="/" component={ LinkForm }/>
                        <Route path="/list" component={ LinkListWithData }/>
                    </div>
                </div>
            </Router>)).to.equal(true);
    });
});
