import navFromEdges from '../nav-from-edges';

// hepler function to create an edge object
const createEdge = (frontmatter) => ({
  node: {
    frontmatter,
  },
});

describe('[util] navFromEdges', () => {
  it('creates an array of nested links', () => {
    const edges = [
      createEdge({
        title: 'One',
        path: '/one',
      }),
      createEdge({
        title: 'OneTwo',
        path: '/one/two',
      }),
      createEdge({
        title: 'ThreeFourFive',
        path: '/three/four/five',
      }),
    ];

    const actual = navFromEdges(edges);
    const expected = [
      {
        displayName: 'One',
        url: '/one',
        children: [
          {
            displayName: 'OneTwo',
            url: '/one/two',
          },
        ],
      },
      {
        displayName: 'Three',
        children: [
          {
            displayName: 'Four',
            children: [
              {
                displayName: 'ThreeFourFive',
                url: '/three/four/five',
              },
            ],
          },
        ],
      },
    ];

    expect(actual).toEqual(expected);
  });

  it('creates a complex array of nested links', () => {
    const edges = [
      createEdge({ title: 'A', path: '/a' }),
      createEdge({ title: 'B1', path: '/a/b1' }),
      createEdge({ title: 'B2', path: '/a/b2' }),
      createEdge({ title: 'C1', path: '/a/b1/c1' }),
      createEdge({ title: 'C2', path: '/a/b1/c2' }),
    ];

    const actual = navFromEdges(edges);
    const expected = [
      {
        displayName: 'A',
        url: '/a',
        children: [
          {
            displayName: 'B1',
            url: '/a/b1',
            children: [
              {
                displayName: 'C1',
                url: '/a/b1/c1',
              },
              {
                displayName: 'C2',
                url: '/a/b1/c2',
              },
            ],
          },
          {
            displayName: 'B2',
            url: '/a/b2',
          },
        ],
      },
    ];
    console.log(JSON.stringify(actual, null, 2));

    expect(actual).toEqual(expected);
  });
});
