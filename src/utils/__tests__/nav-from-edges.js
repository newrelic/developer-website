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
});
