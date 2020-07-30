import React, { Children, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { css } from '@emotion/core';
import styles from './SideBySide.module.scss';
import splitUsing from '../utils/splitUsing';
import splitWhen from '../utils/splitWhen';
import { isMdxType } from '../utils/mdx';
import usePageLayout from '../hooks/usePageLayout';

const BREAKPOINTS = {
  SINGLE_COLUMN: '1240px',
  RELATED_CONTENT: '1520px',
};

const SideBySide = ({ className, children, type }) => {
  const types = Array.isArray(type) ? type : [type];
  const childObjects = Children.toArray(children);
  const rendersRightColumn = childObjects.some((child) =>
    types.some(
      (type) =>
        isMdxType(child, type) ||
        isMdxType(child, type, { nestedWithin: 'span' })
    )
  );
  const sections = splitUsing(childObjects, (child) =>
    types.some(
      (type) =>
        isMdxType(child, type) ||
        isMdxType(child, type, { nestedWithin: 'span' })
    )
  ).map((section) =>
    splitWhen(section, (child) =>
      types.some(
        (type) =>
          isMdxType(child, type) ||
          isMdxType(child, type, { nestedWithin: 'span' })
      )
    )
  );

  const pageLayout = usePageLayout();

  return (
    <div
      css={css`
        @media (max-width: ${BREAKPOINTS[pageLayout]}) {
          grid-template-columns: minmax(0, 1fr);
          grid-gap: 0;
        }
      `}
      className={cx(className, styles.container)}
    >
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
