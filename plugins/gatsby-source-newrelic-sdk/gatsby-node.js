const loadSdk = require('./src/loadSdk');
const { getComponentDoc, getApiDoc } = require('./src/docInfo');
const { DOCUMENTED_APIS, DOCUMENTED_COMPONENTS } = require('./src/constants');

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
      propTypes: [NewRelicSdkPropTypeDefinition!]!
    }

    type NewRelicSdkPropTypeDefinition @dontInfer {
      name: String!
      type: NewRelicSdkPropTypeDefinitionType!
    }

    type NewRelicSdkPropTypeDefinitionType @dontInfer {
      name: String!
      raw: String!
      meta: NewRelicSdkPropTypeMeta
    }

    type NewRelicSdkPropTypeFunctionMeta @infer {
      returnValue: NewRelicSdkFunctionReturnValue!
      params: [NewRelicSdkFuncionParam!]!
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

    type NewRelicSdkFuncionParam {
      description: String
      name: String!
      type: String!
    }
  `;

  createTypes([propTypeMeta, typeDefs]);
};

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    NewRelicSdkFunctionReturnValue: {
      type: {
        resolve: (source) => source.promiseType || source.type,
      },
    },
  });
};

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  { release }
) => {
  const { createNode } = actions;
  const sdk = await loadSdk(release);

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
    const data = getApiDoc(name, sdk);

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
