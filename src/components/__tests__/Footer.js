import React from 'react';
import renderer from 'react-test-renderer';

import Footer from '../Footer';

describe('Footer', () => {
  it('renders correctly', () => {
    const pages = [
      { displayName: 'One', url: '/one' },
      { displayName: 'Two', url: '/two' },
    ];
    const tree = renderer.create(<Footer pages={pages} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
