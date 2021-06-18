import React, { Fragment, useContext } from 'react';
import cx from 'classnames';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import CodeDef from './CodeDef';
import FunctionDefinition from './FunctionDefinition';
import Markdown from './Markdown';
import ReferenceExample from './ReferenceExample';
import * as styles from './PropList.module.scss';
import { Callout } from '@newrelic/gatsby-theme-newrelic';
import { graphql } from 'gatsby';
import { SdkContext } from './SdkContext';
import Spinner from './Spinner';

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
        <CodeDef
          css={css`
            max-height: 320px;
            overflow-y: scroll;
          `}
        >
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
        type.meta.constants.length > 0 && (
          <CodeDef
            css={css`
              max-height: 320px;
              overflow-y: scroll;
            `}
          >
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
        )
      );
    case 'oneOfType':
      return type.meta.types.map((type, idx) => (
        <PropTypeInfo key={idx} type={type} />
      ));
    case 'shape':
      return (
        <div
          css={css`
            &:not(:last-child) {
              margin-bottom: 4rem;
            }
          `}
        >
          <h3
            css={css`
              color: var(--accent-text-color);
              font-family: var(--code-font);
            `}
          >
            shape
          </h3>
          <PropList
            propTypes={type.meta.types}
            css={css`
              border-bottom: 0 !important;
              padding-bottom: 0 !important;

              &:not(:last-child) {
                margin-bottom: 1rem !important;
              }
            `}
          />
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

const PropList = ({ className, propTypes }) => {
  const { loaded: sdkLoaded, error: sdkError } = useContext(SdkContext);

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
            <div key={name} className={cx(styles.container, className)}>
              <div className={styles.info}>
                <div
                  css={css`
                    margin-bottom: 1rem;
                  `}
                >
                  <span
                    css={css`
                      font-weight: bold;
                      font-size: 1rem;
                      color: var(--color-neutrals-800);
                      font-family: var(--code-font);

                      .dark-mode & {
                        color: var(--color-dark-800);
                      }
                    `}
                  >
                    {name}
                  </span>
                  {isRequired && (
                    <span className={styles.flagged}>required</span>
                  )}
                  {deprecation && (
                    <span className={styles.flagged}>deprecated</span>
                  )}

                  <span
                    css={css`
                      font-size: 0.875rem;
                      font-family: var(--code-font);
                      margin-left: 0.5rem;
                      font-weight: 600;
                      color: var(--accent-text-color);
                    `}
                  >
                    {type.name}
                  </span>
                </div>
                {defaultValue !== null && (
                  <div
                    css={css`
                      margin-top: 2rem;
                    `}
                  >
                    <div
                      css={css`
                        color: var(--accent-text-color);
                        font-size: 0.75rem;
                        font-weight: bold;
                        letter-spacing: 0.05em;
                        margin-bottom: 0.25rem;
                      `}
                    >
                      DEFAULT
                    </div>
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
                  <Callout variant="caution" title={`Due ${deprecation.date}`}>
                    <Markdown source={deprecation.description} />
                  </Callout>
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
                {sdkLoaded &&
                  examples.map((example, idx) => (
                    <ReferenceExample
                      key={idx}
                      className={styles.section}
                      example={example}
                    />
                  ))}
                {!sdkLoaded && !sdkError && <Spinner />}
                {sdkError && <div>There was a problem loading the example</div>}
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

PropList.propTypes = {
  className: PropTypes.string,
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
