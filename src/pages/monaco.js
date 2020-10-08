const lodash = require('lodash');

const monacoConfig = (monaco, sdk) => {
  monaco.languages.registerCompletionItemProvider('javascript', {
    provideCompletionItems: (model, position) => {
      const word = model.getWordUntilPosition(position);
      const range = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: word.startColumn,
        endColumn: word.endColumn,
      };
      return {
        suggestions: createComponentCompletion(range, monaco, sdk),
      };
    },
  });
  monaco.languages.registerHoverProvider('javascript', {
    provideHover: (model, position, token) => {
      const source = new monaco.CancellationTokenSource(token);
      source.cancel();
      if (!model.getWordAtPosition(position)) return null;
      const word = model.getWordAtPosition(position).word;
      const range = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: word.startColumn,
        endColumn: word.endColumn,
      };
      if (Object.keys(sdk).includes(word)) {
        return createHoverProvider(range, sdk, word);
      }
      return null;
    },
  });
};

const createComponentCompletion = (range, monaco, sdk) => {
  return Object.keys(sdk).map((component) => {
    return {
      label: component,
      kind: monaco.languages.CompletionItemKind.Function,
      documentation: sdk[component]?.__docs__?.text || '',
      insertText: `<${component}></${component}>`,
      range: range,
    };
  });
};

const createHoverProvider = (range, sdk, component) => {
  return {
    range: range,
    contents: [
      {
        value:
          `### ${component} Example Implementation \n \`\`\`javascript\n${sdk[component]?.__docs__?.tags.examples[0].sourceCode}\n\`\`\`` ||
          '',
      },
      {
        value: `[Learn more here](https://developer.newrelic.com/components/${component.toLowerCase()})`,
      },
    ],
  };
};

export default monacoConfig;
