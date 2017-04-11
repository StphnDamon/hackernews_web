import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import App from '../src/component/App';
import AppApollo from '../src/component/AppApollo';
import AppMenu from '../src/component/AppMenu';

describe('Test src/component/App.js', () => {
  it('renders a single AppApollo < /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(AppApollo)).to.have.length(1);
  });

  it('renders a single AppMenu < /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(AppMenu)).to.have.length(1);
  });

  it('renders App < /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.equals(<AppApollo>
        <AppMenu />
      </AppApollo>)).to.equal(true);
  });
});
