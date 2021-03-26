import { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useMonaco } from '@monaco-editor/react';
import theme from './nordDark';

const LAST_COMPONENT = /[A-Za-z ]+(?!.*<)/;

const DEFAULT_PROPS = {
  func: '() => {}',
  number: '0',
  string: "''",
  arrayOf: '[]',
  bool: 'false',
  object: '{}',
};

const useCustomMonaco = () => {
  const {
    allNewRelicSdkComponent: { nodes: components },
  } = useStaticQuery(graphql`
    query {
      allNewRelicSdkComponent {
        nodes {
          name
          usage
          description
          constants {
            name
            value
          }
          propTypes {
            defaultValue
            name
            isRequired
            type {
              name
            }
            description
          }
        }
      }
    }
  `);
  const monaco = useMonaco();
  const [disposable, setDisposable] = useState(null);
  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme('nightOwl', theme);
      monaco.editor.setTheme('nightOwl');
      if (disposable) {
        disposable.dispose();
      }
      const editor = monaco.languages.registerCompletionItemProvider(
        'javascript',
        {
          triggerCharacters: ['<', ' ', '/', '.'],
          provideCompletionItems: (model, position) => {
            return {
              suggestions: provideCompletion({
                model,
                position,
                components,
                monaco,
              }),
            };
          },
        }
      );
      monaco.languages.registerHoverProvider('javascript', {
        provideHover: (model, position, token) => {
          const source = new monaco.CancellationTokenSource(token);
          source.cancel();
          if (!model.getWordAtPosition(position)) return null;
          return hoverProvider({ model, position, components });
        },
      });
      setDisposable(editor);

      return () => {
        editor.dispose();
        monaco.languages.registerHoverProvider('javascript', {});
        monaco.languages.registerCompletionItemProvider('javascript', {});
      };
    }
  }, [monaco]);
};

const hoverProvider = ({ model, position, components }) => {
  const word = model.getWordAtPosition(position).word;
  const range = {
    startLineNumber: position.lineNumber,
    endLineNumber: position.lineNumber,
    startColumn: word.startColumn,
    endColumn: word.endColumn,
  };

  const component = components.find(
    ({ name: componentName }) => componentName === word
  );

  if (component) {
    return {
      range: range,
      contents: [
        {
          value: `\`\`\`javascript\n${component.usage}\n\`\`\`` || '',
        },
        {
          value: component.description,
        },
        {
          value: `[Learn more here](https://developer.newrelic.com/components/${component.name.toLowerCase()})`,
        },
      ],
    };
  }
  const lastChars = model.getValueInRange({
    startLineNumber: position.lineNumber,
    startColumn: 0,
    endLineNumber: position.lineNumber,
    endColumn: position.column,
  });

  const isComponentProp = LAST_COMPONENT.test(lastChars);

  if (isComponentProp) {
    const matchComponent = lastChars.match(LAST_COMPONENT).join('').split(' ');
    const component = matchComponent[0];

    const { propTypes = [] } = components.find(
      ({ name: componentName }) => componentName === component
    );

    const prop = propTypes.find(
      ({ name: attributeName }) => word === attributeName
    );
    if (prop) {
      return {
        range: range,
        contents: [
          {
            value: prop.description,
          },
        ],
      };
    }
  }
};

const provideCompletion = ({ model, position, components, monaco }) => {
  const suggestions = [];
  const lastChars = model.getValueInRange({
    startLineNumber: position.lineNumber,
    startColumn: 0,
    endLineNumber: position.lineNumber,
    endColumn: position.column,
  });
  const words = lastChars.replace('\t', '').split(' ');
  const activeTyping = words[words.length - 1];

  const isComponent =
    activeTyping.charAt(activeTyping.length - 1) === '<' ||
    activeTyping.includes(`<${model.getWordUntilPosition(position)}`);

  if (isComponent) {
    const componentSuggestions = components.map(
      ({ name, propTypes, description }) => {
        const requiredProps = propTypes
          .filter(({ isRequired }) => isRequired)
          .filter(({ name }) => name === 'children');

        const startTag = `${name}`;
        const endTag = `</${name}>`;
        const attributes = requiredProps
          .map(({ name, defaultValue, type }) => {
            return `${name}={${String(
              defaultValue ?? (DEFAULT_PROPS[type.raw] || null)
            )}}`;
          })
          .join(' ');

        const insertText = `${startTag}${
          attributes !== ' ' ? ` ${attributes}>` : ''
        }${endTag}`;

        return {
          label: name,
          kind: monaco.languages.CompletionItemKind.Class,
          documentation: description,
          insertText,
        };
      }
    );
    suggestions.push(...componentSuggestions);
  }

  const isComponentProp = LAST_COMPONENT.test(lastChars);

  if (isComponentProp) {
    const matchComponent = lastChars.match(LAST_COMPONENT).join('').split(' ');
    const component = matchComponent[0];

    const { propTypes = [] } = components.find(
      ({ name: attributeName }) => attributeName === component
    );
    const propSuggestions = propTypes.map(
      ({ name: attributeName, defaultValue, type, description }) => {
        return {
          label: attributeName,
          kind:
            type.name === 'function'
              ? monaco.languages.CompletionItemKind.Method
              : monaco.languages.CompletionItemKind.Property,
          documentation: description,
          insertText: `${attributeName}={${defaultValue}}`,
        };
      }
    );
    suggestions.push(...propSuggestions);
  }

  const isComponentMember =
    activeTyping.charAt(activeTyping.length - 1) === '.';

  if (isComponentMember) {
    const parents = activeTyping
      .substring(0, activeTyping.length - 1)
      .split('.');
    const lastToken = parents.length > 1 ? parents[1] : parents[0];
    const { constants = [] } = components.find(
      ({ name: constantName }) => constantName === lastToken
    );
    const constantSuggestions = constants.map(({ constantName }) => {
      return {
        label: constantName,
        kind: monaco.languages.CompletionItemKind.Property,
        insertText: constantName,
      };
    });
    suggestions.push(...constantSuggestions);
  }
  return suggestions;
};

export default useCustomMonaco;
