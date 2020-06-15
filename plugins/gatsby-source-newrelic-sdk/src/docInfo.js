const { getExamples } = require('./exampleInfo');

exports.getComponentDoc = (name, sdk) => {
  const component = sdk[name];

  if (!component) {
    return null;
  }

  return {
    name,
    usage: `import { ${name} } from 'nr1'`,
    description: component.__docs__.text,
    examples: getExamples(component),
  };
};

exports.getApiDoc = (name, sdk) => {
  const api = sdk[name];

  if (!api) {
    return null;
  }

  return {
    name,
    usage: `import { ${name} } from 'nr1'`,
    description: api.__docs__.text,
    examples: getExamples(api),
  };
};
