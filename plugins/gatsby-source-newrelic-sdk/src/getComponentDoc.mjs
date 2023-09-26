import getExamples from './getExamples.mjs';
import { getTypeDefs } from './getTypeDefs.mjs';
import getMethods from './getMethods.mjs';
import getConstants from './getConstants.mjs';
import { getPropTypes } from './getPropTypes.mjs';

export default (name, sdk) => {
  const component = sdk[name];

  if (!component) {
    throw new Error(`Component \`${name}\` does not exist in the SDK`);
  }

  const properties = Object.getOwnPropertyNames(component).map(
    (key) => component[key]
  );

  const propTypes = Object.getOwnPropertyNames(component.propTypes || {}).map(
    (key) => component.propTypes[key]
  );

  return {
    name,
    usage: `import { ${name} } from 'nr1'`,
    constants: getConstants(name, sdk),
    description: component.__docs__.text,
    examples: getExamples(name, sdk),
    propTypes: getPropTypes(component),
    methods: getMethods(name, sdk),
    typeDefs: getTypeDefs(properties.concat(propTypes), sdk),
  };
};
