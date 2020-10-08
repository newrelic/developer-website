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

export default monacoConfig;
