import React from 'react';
import { render } from '@testing-library/react';

import BreadcrumbBar from '../BreadcrumbBar';

const crumbs = [
  { displayName: 'Food', url: '/food' },
  { displayName: 'Mexican' },
  { displayName: 'Tacos' },
];

describe('BreadcrumbBar', () => {
  it('renders a list of breadcrumbs', () => {
    const { getByText } = render(<BreadcrumbBar crumbs={crumbs} />);
    const crumb1 = getByText('Food');
    const crumb2 = getByText('Mexican');
    const crumb3 = getByText('Tacos');

    expect(crumb1).toBeTruthy();
    expect(crumb2).toBeTruthy();
    expect(crumb3).toBeTruthy();
  });

  it('render crumbs with urls as links', () => {
    const { getByText } = render(<BreadcrumbBar crumbs={crumbs} />);
    const crumb1 = getByText('Food');
    const expected = `${window.location.href}food`;

    expect(crumb1.href).toEqual(expected);
  });

  it('render crumbs without urls as spans', () => {
    const { getByText } = render(<BreadcrumbBar crumbs={crumbs} />);
    const crumb2 = getByText('Mexican');

    expect(crumb2.href).toBeFalsy();
  });
});
