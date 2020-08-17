const additionalDocs = {
  nerdlet: {
    methods: [
      {
        name: 'nerdlet.setUrlState',
        description: `
Updates the current nerdlet's URL state that can be read from
[\`NerdletStateContext.Consumer\`](/components/nerdlet-state-context).

If you wish to update nerdlet's state without persisting its value in the
url, use React's built-in \`setState()\`.

This method behaves like React's \`setState()\`, meaning that it performs a
shallow merge between the current URL state and the provided state in the
\`urlState\` parameter.

If you wish to navigate without adding an entry to the browser history, set
\`urlStateOptions.replaceHistory\` to \`true\`.
        `.trim(),
        returnValue: { type: 'void' },
        params: [
          {
            name: 'urlState',
            type: 'Object',
            description: 'New nerdlet URL state.',
          },
          {
            name: 'urlStateOptions',
            type: 'UrlStateOptions',
            description: 'Options for the URL state.',
          },
        ],
        examples: [
          {
            label: 'Example 1',
            sourceCode: `
nerlet.setUrlState({
  foo: 'bar',
});
            `.trim(),
            options: {
              live: false,
            },
          },
        ],
      },
    ],
  },
};

export default additionalDocs;
