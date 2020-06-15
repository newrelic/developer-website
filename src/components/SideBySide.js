import React, { Children, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './SideBySide.module.scss';
import splitUsing from '../utils/splitUsing';
import splitWhen from '../utils/splitWhen';
import { isMdxType } from '../utils/mdx';

const SideBySide = ({ className, children, type }) => {
  const types = Array.isArray(type) ? type : [type];
  const childObjects = Children.toArray(children);
  const rendersRightColumn = childObjects.some((child) =>
    types.some((type) => isMdxType(child, type))
  );
  const sections = splitUsing(childObjects, (child) =>
    types.some((type) => isMdxType(child, type))
  ).map((section) =>
    splitWhen(section, (child) => types.some((type) => isMdxType(child, type)))
  );

  return (
    <div className={cx(className, styles.container)}>
      {sections.map(([left, right], idx) => (
        <Fragment key={idx}>
          <div className={cx({ [styles.spanColumns]: !rendersRightColumn })}>
            {left}
          </div>
          {rendersRightColumn && <div>{right}</div>}
        </Fragment>
      ))}
    </div>
  );
};

SideBySide.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  className: PropTypes.string,
};

export default SideBySide;
