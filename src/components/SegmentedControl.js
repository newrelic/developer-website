import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { Icon } from '@newrelic/gatsby-theme-newrelic';

const getViewType = (fullView) => fullView.split(' ')[0].toLowerCase();

const get = (x, key) =>
  Object.prototype.hasOwnProperty.call(x, key) ? x[key] : x;

const SegmentedControl = ({ items, onChange, className }) => {
  const [selected, setSelected] = useState(get(items[0], 'value'));

  return (
    <div
      className={className}
      css={css`
        button {
          border: 0;
          background: none;
          cursor: pointer;
          user-select: none;
        }

        .dark-mode & {
          button {
            color: var(--color-neutrals-500);
          }
        }
      `}
    >
      {items.map((item, index) => {
        const value = get(item, 'value');

        // Do not display current view button
        if (getViewType(value) === getViewType(selected)) return;

        return (
          <button
            type="button"
            key={index}
            tabIndex={index}
            value={value}
            onClick={(e) => {
              setSelected(value);
              onChange && onChange(e, value);
            }}
            css={css`
              margin-left: 8px;
            `}
          >
            <Icon
              title={value}
              css={css`
                margin-top: 4px;
                font-size: 1.5em;
              `}
              name={`fe-${getViewType(value)}`}
            />
          </button>
        );
      })}
    </div>
  );
};

SegmentedControl.propTypes = {
  /** A callback function that is called whenever the user changes the value. */
  onChange: PropTypes.func,

  /** Either a list of strings or a list of objects with a value and an optional
      label and disabled status. */
  items: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string,
        disabled: PropTypes.bool,
      })
    ),
  ]).isRequired,

  /** A Prop for designating css attributes to parent container */
  className: PropTypes.string,
};

export default SegmentedControl;
