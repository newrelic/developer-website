import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import FunctionDefinition from './FunctionDefinition';
import Markdown from 'react-markdown';
import ReferenceExample from './ReferenceExample';
import styles from './PropList.module.scss';
import { format } from 'date-fns';

const PropTypeInfo = ({ type }) => {
  switch (type.raw) {
    case 'func':
      return (
        <FunctionDefinition
          returnValue={type.meta.returnValue}
          params={type.meta.params}
        />
      );
    case 'arrayOf': {
      const { itemTypes } = type.meta;

      return itemTypes.raw === 'oneOf' ? (
        <div className={styles.listLike}>
          <div>{'<Array of'}</div>
          <div className={styles.arg}>
            <PropTypeInfo type={itemTypes} />
          </div>
          <div>{'>'}</div>
        </div>
      ) : (
        <PropTypeInfo type={itemTypes} />
      );
    }
    case 'oneOf':
      return (
        <div className={styles.listLike}>
          <div>{'<One of'}</div>
          <div className={styles.arg}>
            {type.meta.constants.map((constant) => (
              <div key={constant}>{constant},</div>
            ))}
          </div>
          <div>{'>'}</div>
        </div>
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
                <code>{name}</code>
                {isRequired && <span className={styles.flagged}>required</span>}
                {deprecation && (
                  <span className={styles.flagged}>deprecated</span>
                )}
                <div className={styles.type}>{type.name}</div>
                {defaultValue !== undefined && (
                  <div className={styles.default}>
                    <p>DEFAULT</p>
                    <p>{String(defaultValue)}</p>
                  </div>
                )}
              </div>
              <div className={styles.propInfo}>
                {deprecation && (
                  <div className={styles.deprecation}>
                    <div className={styles.deprecationDate}>
                      Due {format(new Date(deprecation.date), 'MMMM do, yyyy')}
                    </div>
                    <Markdown
                      className={styles.markdownContainer}
                      source={deprecation.description}
                    />
                  </div>
                )}
                {description && (
                  <Markdown
                    className={cx(styles.details, styles.markdownContainer)}
                    source={description}
                  />
                )}
                <PropTypeInfo type={type} />
                {examples.map((example, idx) => (
                  <ReferenceExample key={idx} example={example} />
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
      deprecation: PropTypes.shape({
        date: PropTypes.number,
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

export default PropList;
