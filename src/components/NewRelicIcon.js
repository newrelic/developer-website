import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './NewRelicIcon.module.scss';

const NewRelicIcon = ({ className, name, size = '1em' }) => {
  const paths = NEWRELIC_ICONS[name];

  return paths ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cx(styles.icon, className)}
      style={{ width: size, height: size }}
    >
      {paths}
    </svg>
  ) : null;
};

const NEWRELIC_ICONS = {
  automation: (
    <>
      <g>
        <path
          class="st0"
          d="M14.6,14.3l1.4-0.8l-1.9-3.3l-1.4,0.8c-0.7-0.6-1.5-1.1-2.4-1.4V7.9H6.4v1.6C5.5,9.8,4.7,10.3,4,10.9l-1.4-0.8
		l-1.9,3.3L2,14.3c-0.2,1-0.2,1.8,0,2.8l-1.4,0.8l1.9,3.3L4,20.4c0.7,0.6,1.5,1.1,2.4,1.4v1.6h3.9v-1.6c0.9-0.3,1.7-0.8,2.4-1.4
		l1.4,0.8l1.9-3.3l-1.4-0.8C14.8,16.1,14.8,15.2,14.6,14.3z"
        />
        <circle class="st0" cx="8.3" cy="15.7" r="2.6" />
      </g>
      <g>
        <path
          class="st2"
          d="M22.7,4.2l0.8-0.5l-1.2-2l-0.8,0.5c-0.4-0.4-0.9-0.7-1.5-0.8v-1h-2.3v1c-0.5,0.2-1,0.5-1.5,0.8l-0.8-0.5
		l-1.2,2l0.8,0.5c-0.1,0.6-0.1,1.1,0,1.7l-0.8,0.5l1.2,2l0.8-0.5c0.4,0.4,0.9,0.7,1.5,0.8v1h2.3v-1c0.5-0.2,1-0.5,1.5-0.8l0.8,0.5
		l1.2-2l-0.8-0.5C22.9,5.3,22.9,4.8,22.7,4.2z"
        />
        <circle class="st2" cx="18.9" cy="5.1" r="1.6" />
      </g>
    </>
  ),
  buildApps: (
    <>
      <polygon points="11.5,7.5 .5,4.5 12,1.5 23.5,4.5"></polygon>
      <polyline points="23.5,4.463 23.5,18.5 11.5,22.5 .5,18.5 .5,4.463"></polyline>
      <line x1="11.5" x2="11.5" y1="7.5" y2="22.5"></line>
    </>
  ),
  collectData: (
    <>
      <path d="M15.799 16.5h2.396c0 0 4.305-.561 4.305-4.783 0-2.675-2.209-4.874-4.955-4.773 -1.073-2.266-3.373-3.835-6.045-3.835 -3.563 0-6.468 2.784-6.676 6.294 -2.232-.467-4.324 1.232-4.324 3.509 0 3.645 3.826 3.588 3.826 3.588h2.863"></path>
      <line x1="11.5" x2="11.5" y1="11" y2="22"></line>
      <polyline points="14.5,14 11.5,11 8.5,14"></polyline>
    </>
  ),
  developerDocs: (
    <>
      <path d="M16.5 2.5c0 0-1.893 0-2 0 -2 0-3 1.5-3 3.5 0-2-1-3.5-3-3.5 -.5 0-8 0-8 0v16c0 0 6.5 0 8 0 2 0 3 1 3 3 0-2 1-3 3-3 1.5 0 8 0 8 0v-16h-2"></path>
      <line x1="11.5" x2="11.5" y1="6" y2="21"></line>
      <polygon points="20.5,10 18.5,8 16.5,10 16.5,1.5 20.5,1.5"></polygon>
    </>
  ),
};

NewRelicIcon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.oneOf(Object.keys(NEWRELIC_ICONS)).isRequired,
  size: PropTypes.string,
};

export default NewRelicIcon;
