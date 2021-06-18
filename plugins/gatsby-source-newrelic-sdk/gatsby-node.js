const loadSdk = require('./src/loadSdk');
const getApiDoc = require('./src/getApiDoc');
const getComponentDoc = require('./src/getComponentDoc');
const {
  BASE_URL,
  DOCUMENTED_APIS,
  DOCUMENTED_COMPONENTS,
} = require('./src/constants');
const navigationApi = require('./src/navigationApi');

const hasOwnProperty = (obj, name) =>
  Object.prototype.hasOwnProperty.call(obj, name);

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;

  const propTypeMeta = schema.buildUnionType({
    name: 'NewRelicSdkPropTypeMeta',
    types: [
      'NewRelicSdkPropTypeArrayOfMeta',
      'NewRelicSdkPropTypeEnumMeta',
      'NewRelicSdkPropTypeFunctionMeta',
      'NewRelicSdkPropTypeShapeMeta',
      'NewRelicSdkPropTypeUnionMeta',
    ],
    resolveType: (value) => {
      if (
        hasOwnProperty(value, 'types') &&
        hasOwnProperty(value.types[0], 'type')
      ) {
        return 'NewRelicSdkPropTypeShapeMeta';
      }

      if (hasOwnProperty(value, 'types')) {
        return 'NewRelicSdkPropTypeUnionMeta';
      }

      if (hasOwnProperty(value, 'returnValue')) {
        return 'NewRelicSdkPropTypeFunctionMeta';
      }

      if (hasOwnProperty(value, 'itemTypes')) {
        return 'NewRelicSdkPropTypeArrayOfMeta';
      }

      if (hasOwnProperty(value, 'constants')) {
        return 'NewRelicSdkPropTypeEnumMeta';
      }
    },
  });

  const typeDefs = `
    type NewRelicSdkComponent implements Node {
      constants: [NewRelicSdkConstant!]!
      examples: [NewRelicSdkExample!]!
      propTypes: [NewRelicSdkPropTypeDefinition!]!
      typeDefs: [NewRelicSdkTypeDefinition!]!
      methods: [NewRelicSdkMethod!]!
    }

    type NewRelicSdkApi implements Node {
      constants: [NewRelicSdkConstant!]!
      examples: [NewRelicSdkExample!]!
      typeDefs: [NewRelicSdkTypeDefinition]
      methods: [NewRelicSdkMethod!]!
    }

    type NewRelicSdkPropTypeDefinition {
      name: String!
      type: NewRelicSdkPropTypeDefinitionType!
      examples: [NewRelicSdkExample!]!
    }

    type NewRelicSdkMethod {
      examples: [NewRelicSdkExample!]!
      arguments: [NewRelicSdkFunctionArgument!]!
      returnValue: NewRelicSdkFunctionReturnValue!
    }

    type NewRelicSdkComponentPropTypesDeprecation {
      date: Date! @dateformat(formatString: "MM-DD-YYYY")
    }

    type NewRelicSdkPropTypeDefinitionType @dontInfer {
      name: String!
      raw: String!
      meta: NewRelicSdkPropTypeMeta
    }

    type NewRelicSdkPropTypeFunctionMeta {
      returnValue: [NewRelicSdkFunctionReturnValue]!
      arguments: [NewRelicSdkFunctionArgument!]!
    }

    type NewRelicSdkPropTypeEnumMeta {
      constants: [String!]!
    }

    type NewRelicSdkPropTypeArrayOfMeta {
      itemTypes: NewRelicSdkPropTypeDefinitionType!
    }

    type NewRelicSdkPropTypeUnionMeta {
      types: [NewRelicSdkPropTypeDefinitionType!]!
    }

    type NewRelicSdkPropTypeShapeMeta {
      types: [NewRelicSdkPropTypeDefinition!]!
    }

    type NewRelicSdkFunctionReturnValue {
      description: String
      type: String!
    }

    type NewRelicSdkFunctionArgument {
      description: String
      name: String!
      type: String!
    }

    type NewRelicSdkTypeDefinition {
      name: String!
      properties: [NewRelicSdkTypeDefinitionProperty]
    }

    type NewRelicSdkTypeDefinitionProperty {
      name: String!
      description: String
      type: String!
    }

    type NewRelicSdkConstant {
      name: String!
      value: JSON!
    }

    type NewRelicSdkExample {
      label: String!
      sourceCode: String!
      live: Boolean!
      preview: Boolean!
    }

    type Query {
      newRelicSdk: NewRelicSdk!
    }

    type NewRelicSdk {
      version: String!
      assets: NewRelicSdkAssets!
    }

    type NewRelicSdkAssets {
      js: String!
      css: String!
    }
  `;

  createTypes([propTypeMeta, typeDefs]);
};

exports.createResolvers = ({ createResolvers }, pluginOptions) => {
  const { release } = pluginOptions;

  createResolvers({
    Query: {
      newRelicSdk: {
        resolve: () => ({
          version: release,
          assets: {
            js: `${BASE_URL}-${release}.js`,
            css: `${BASE_URL}-${release}.css`,
          },
        }),
      },
    },
    NewRelicSdkFunctionReturnValue: {
      type: {
        resolve: (source) => source.promiseType || source.type,
      },
    },
  });
};

exports.sourceNodes = async (
  { actions, cache, createNodeId, createContentDigest },
  { release }
) => {
  const { createNode } = actions;
  const sdk = await loadSdk(release, { cache });

  DOCUMENTED_COMPONENTS.forEach((name) => {
    const data = getComponentDoc(name, sdk);

    if (data) {
      createNode({
        ...data,
        id: createNodeId(`NewRelicSdkComponent-${name}`),
        parent: null,
        children: [],
        internal: {
          type: 'NewRelicSdkComponent',
          contentDigest: createContentDigest(data),
        },
      });
    }
  });

  DOCUMENTED_APIS.forEach((name) => {
    const data = name === 'navigation' ? navigationApi : getApiDoc(name, sdk);

    if (data) {
      createNode({
        ...data,
        id: createNodeId(`NewRelicSdkApi-${name}`),
        parent: null,
        children: [],
        internal: {
          type: 'NewRelicSdkApi',
          contentDigest: createContentDigest(data),
        },
      });
    }
  });
};
