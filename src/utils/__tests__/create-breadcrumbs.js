import createBreadcrumbs from '../create-breadcrumbs';

const sidenav = [
  {
    displayName: 'Plants',
    url: '/plants',
    children: [
      {
        displayName: 'Ficus',
        url: '/plants/ficus',
      },
      {
        displayName: 'Bromeliad',
        url: '/plants/bromeliad',
      },
    ],
  },
  {
    displayName: 'Food',
    url: '/food',
    children: [
      {
        displayName: 'Mexican',
        children: [
          {
            displayName: 'Chimichurri',
            url: '/food/mex/chimichurri',
          },
          {
            displayName: 'Tacos',
            url: '/food/mex/tacos',
          },
        ],
      },
    ],
  },
];

describe('util/create-breadcrumbs', () => {
  it('should create breadcrumbs for a page', () => {
    const result1 = createBreadcrumbs('/plants', sidenav);
    const expected1 = [{ displayName: 'Plants' }];

    const result2 = createBreadcrumbs('/plants/bromeliad', sidenav);
    const expected2 = [
      { displayName: 'Plants', url: '/plants' },
      { displayName: 'Bromeliad' },
    ];

    const result3 = createBreadcrumbs('/food/mex/tacos', sidenav);
    const expected3 = [
      { displayName: 'Food', url: '/food' },
      { displayName: 'Mexican' },
      { displayName: 'Tacos' },
    ];

    expect(result1).toEqual(expected1);
    expect(result2).toEqual(expected2);
    expect(result3).toEqual(expected3);
  });

  it('should return an empty array if unable to find page', () => {
    const result = createBreadcrumbs('/foobar', sidenav);
    const expected = [];

    expect(result).toEqual(expected);
  });

  it('should throw an error if missing parameters', () => {
    const result1 = () => createBreadcrumbs();
    const result2 = () => createBreadcrumbs('/plants');

    expect(result1).toThrow(new Error('createBreadcrumbs: Missing parameters'));
    expect(result2).toThrow(new Error('createBreadcrumbs: Missing parameters'));
  });

  it('should throw an error if parameters in wrong format', () => {
    const result1 = () => createBreadcrumbs(7, sidenav);
    const result2 = () => createBreadcrumbs('/plants', 'foobar');
    const result3 = () => createBreadcrumbs('/plants', []);

    expect(result1).toThrow(new Error('createBreadcrumbs: Invalid parameters'));
    expect(result2).toThrow(new Error('createBreadcrumbs: Invalid parameters'));
    expect(result3).toThrow(new Error('createBreadcrumbs: Invalid parameters'));
  });
});
