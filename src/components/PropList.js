import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import styles from './PropList.module.scss';

const PropList = ({ propTypes }) => {
  if (propTypes.length === 0) {
    return <p>There are no props for this component.</p>;
  }

  return (
    <div>
      {propTypes.map(
        ({ name, description, isRequired, type, defaultValue }) => {
          return (
            <div key={name} className={styles.container}>
              <div className={styles.info}>
                <h3>
                  {name}{' '}
                  {isRequired && (
                    <span className={styles.required}>required</span>
                  )}
                </h3>
                <div className={styles.type}>{type}</div>
                {defaultValue !== undefined && (
                  <div className={styles.default}>
                    <p>DEFAULT</p>
                    <p>{String(defaultValue)}</p>
                  </div>
                )}
              </div>
              <div className={styles.details}>
                <ReactMarkdown source={description} />
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
      isRequired: PropTypes.bool,
      type: PropTypes.string,
      defaultValue: PropTypes.string,
    })
  ),
};

export default PropList;
