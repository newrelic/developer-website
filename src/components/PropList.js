import React, { Fragment } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import CodeDef from './CodeDef';
import FunctionDefinition from './FunctionDefinition';
import Markdown from './Markdown';
import ReferenceExample from './ReferenceExample';
import styles from './PropList.module.scss';
import { graphql } from 'gatsby';

const PropTypeInfo = ({ type }) => {
  switch (type.raw) {
    case 'func':
      return (
        <FunctionDefinition
          returnValue={type.meta.returnValue}
          arguments={type.meta.arguments}
        />
      );
    case 'arrayOf': {
      const { itemTypes } = type.meta;

      return itemTypes.raw === 'oneOf' ? (
        <CodeDef className={styles.codeDef}>
          <CodeDef.Bracket>{'<'}</CodeDef.Bracket>
          <CodeDef.Keyword>Array of</CodeDef.Keyword>
          <CodeDef.Block>
            <PropTypeInfo type={itemTypes} />
          </CodeDef.Block>
          <CodeDef.Bracket>{'>'}</CodeDef.Bracket>
        </CodeDef>
      ) : (
        <PropTypeInfo type={itemTypes} />
      );
    }
    case 'oneOf':
      return (
        <CodeDef className={styles.codeDef}>
          <CodeDef.Bracket>{'<'}</CodeDef.Bracket>
          <CodeDef.Keyword>One of</CodeDef.Keyword>
          <CodeDef.Block>
            {type.meta.constants.map((constant) => (
              <div key={constant}>
                <CodeDef.Identifier key={constant}>
                  {constant},
                </CodeDef.Identifier>
              </div>
            ))}
          </CodeDef.Block>
          <CodeDef.Bracket>{'>'}</CodeDef.Bracket>
        </CodeDef>
      );
    case 'oneOfType':
      return type.meta.types.map((type, idx) => (
        <PropTypeInfo key={idx} type={type} />
      ));
    case 'shape':
      return (
        <div className={styles.shape}>
          <h3>shape</h3>
          <PropList propTypes={type.meta.types} />
        </div>
      );
    default:
      return null;
  }
};

PropTypeInfo.propTypes = {
  type: PropTypes.shape({
    raw: PropTypes.string.isRequired,
    meta: PropTypes.object,
  }),
};

const PropList = ({ propTypes }) => {
  if (propTypes.length === 0) {
    return <p>There are no props for this component.</p>;
  }

  return (
    <div>
      {propTypes.map(
        ({
          name,
          description,
          deprecation,
          examples,
          isRequired,
          type,
          defaultValue,
        }) => {
          return (
            <div key={name} className={styles.container}>
              <div className={styles.info}>
                <div>
                  <code className={styles.propName}>{name}</code>
                  {isRequired && (
                    <span className={styles.flagged}>required</span>
                  )}
                  {deprecation && (
                    <span className={styles.flagged}>deprecated</span>
                  )}
                </div>
                <CodeDef.Type>{type.name}</CodeDef.Type>
                {defaultValue !== null && (
                  <div className={styles.default}>
                    <div className={styles.label}>DEFAULT</div>
                    <code>
                      {String(defaultValue)
                        .split('.')
                        .map((word, idx, parts) =>
                          word === '' ? (
                            '""'
                          ) : (
                            <Fragment key={idx}>
                              {word}
                              {idx !== parts.length - 1 && (
                                <>
                                  <wbr />.
                                </>
                              )}
                            </Fragment>
                          )
                        )}
                    </code>
                  </div>
                )}
              </div>
              <div>
                {deprecation && (
                  <div className={cx(styles.deprecation, styles.section)}>
                    <div className={styles.deprecationDate}>
                      Due {deprecation.date}
                    </div>
                    <Markdown
                      className={styles.deprecationMarkdownContainer}
                      source={deprecation.description}
                    />
                  </div>
                )}
                {description && (
                  <Markdown
                    className={cx(styles.section)}
                    source={description}
                  />
                )}
                <div className={styles.section}>
                  <PropTypeInfo type={type} />
                </div>
                {examples.map((example, idx) => (
                  <ReferenceExample
                    key={idx}
                    className={styles.section}
                    example={example}
                  />
                ))}
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

PropList.propTypes = {
  propTypes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      examples: PropTypes.arrayOf(ReferenceExample.propTypes.example)
        .isRequired,
      deprecation: PropTypes.shape({
        date: PropTypes.string,
        description: PropTypes.string,
      }),
      isRequired: PropTypes.bool,
      type: PropTypes.shape({
        ...PropTypeInfo.propTypes.type,
        name: PropTypes.string.isRequired,
      }),
      defaultValue: PropTypes.string,
    })
  ),
};

export const query = graphql`
  fragment PropList_propTypes on NewRelicSdkPropTypeDefinition {
    name
    description
    deprecation {
      date(formatString: "MMMM Do, YYYY")
      description
    }
    examples {
      ...ReferenceExample_example
    }
    isRequired
    defaultValue
    type {
      name
      raw
      meta {
        ... on NewRelicSdkPropTypeArrayOfMeta {
          itemTypes {
            ...DefType
            meta {
              ... on NewRelicSdkPropTypeEnumMeta {
                constants
              }
              ... on NewRelicSdkPropTypeFunctionMeta {
                ...FuncType
              }
              ... on NewRelicSdkPropTypeShapeMeta {
                ...ShapeType
                types {
                  type {
                    meta {
                      ... on NewRelicSdkPropTypeEnumMeta {
                        constants
                      }
                      ... on NewRelicSdkPropTypeFunctionMeta {
                        ...FuncType
                      }
                    }
                  }
                }
              }
              ... on NewRelicSdkPropTypeUnionMeta {
                ...UnionType
                types {
                  meta {
                    ... on NewRelicSdkPropTypeEnumMeta {
                      constants
                    }
                    ... on NewRelicSdkPropTypeFunctionMeta {
                      ...FuncType
                    }
                  }
                }
              }
            }
          }
        }
        ... on NewRelicSdkPropTypeEnumMeta {
          constants
        }
        ... on NewRelicSdkPropTypeFunctionMeta {
          ...FuncType
        }
        ... on NewRelicSdkPropTypeShapeMeta {
          ...ShapeType
          types {
            type {
              meta {
                ... on NewRelicSdkPropTypeEnumMeta {
                  constants
                }
                ... on NewRelicSdkPropTypeFunctionMeta {
                  ...FuncType
                }
                ... on NewRelicSdkPropTypeUnionMeta {
                  ...UnionType
                  types {
                    meta {
                      ... on NewRelicSdkPropTypeEnumMeta {
                        constants
                      }
                      ... on NewRelicSdkPropTypeFunctionMeta {
                        ...FuncType
                      }
                      ... on NewRelicSdkPropTypeShapeMeta {
                        ...ShapeType
                        types {
                          type {
                            meta {
                              ... on NewRelicSdkPropTypeEnumMeta {
                                constants
                              }
                              ... on NewRelicSdkPropTypeFunctionMeta {
                                ...FuncType
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        ... on NewRelicSdkPropTypeUnionMeta {
          ...UnionType
          types {
            meta {
              ... on NewRelicSdkPropTypeArrayOfMeta {
                itemTypes {
                  ...DefType
                  meta {
                    ... on NewRelicSdkPropTypeEnumMeta {
                      constants
                    }
                    ... on NewRelicSdkPropTypeFunctionMeta {
                      ...FuncType
                    }
                    ... on NewRelicSdkPropTypeUnionMeta {
                      types {
                        meta {
                          ... on NewRelicSdkPropTypeEnumMeta {
                            constants
                          }
                          ... on NewRelicSdkPropTypeFunctionMeta {
                            ...FuncType
                          }
                        }
                      }
                    }
                  }
                }
              }
              ... on NewRelicSdkPropTypeEnumMeta {
                constants
              }
              ... on NewRelicSdkPropTypeFunctionMeta {
                ...FuncType
              }
              ... on NewRelicSdkPropTypeShapeMeta {
                ...ShapeType
                types {
                  type {
                    meta {
                      ... on NewRelicSdkPropTypeEnumMeta {
                        constants
                      }
                      ... on NewRelicSdkPropTypeFunctionMeta {
                        ...FuncType
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  fragment DefType on NewRelicSdkPropTypeDefinitionType {
    name
    raw
  }

  fragment FuncType on NewRelicSdkPropTypeFunctionMeta {
    arguments {
      ...FunctionDefinition_arguments
    }

    returnValue {
      ...FunctionDefinition_returnValue
    }
  }

  fragment ShapeType on NewRelicSdkPropTypeShapeMeta {
    types {
      name
      description
      deprecation {
        date(formatString: "MMMM Do, YYYY")
        description
      }
      examples {
        ...ReferenceExample_example
      }
      isRequired
      type {
        name
        raw
      }
      defaultValue
    }
  }

  fragment UnionType on NewRelicSdkPropTypeUnionMeta {
    types {
      name
      raw
    }
  }
`;

export default PropList;
