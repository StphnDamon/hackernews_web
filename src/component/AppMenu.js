import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Header, Menu } from 'stardust';
import LinkForm from './LinkForm';
import LinkList from './LinkList';

class AppMenu extends Component {
    render() {
        return (
            <Router>
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
                        <Route exact path="/" component={ LinkForm } />
                        <Route path="/list" component={ LinkList.UrlListWithData } />
                    </div>
                </div>
            </Router>
        );
    }
}

export default AppMenu;