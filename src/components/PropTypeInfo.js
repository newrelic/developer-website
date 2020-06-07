import React from 'react';
import PropTypes from 'prop-types';
import FunctionDefinition from './FunctionDefinition';
import styles from './PropTypeInfo.module.scss';

const PropTypeInfo = ({ type }) => {
  switch (type.raw) {
    case 'func':
      return (
        <FunctionDefinition
          returnValue={type.meta.returnValue}
          params={type.meta.params}
        />
      );
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

export default PropTypeInfo;
