import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai';
import Header from '../Header';

describe('<Header />', () => {
  it('renders the title', () => {
    const wrapper = render(<Header />);
    expect(wrapper.text()).to.contain('Header');
  });
});
