import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const get = (x, key) =>
  Object.prototype.hasOwnProperty.call(x, key) ? x[key] : x;

const SegmentedControl = ({ items, onChange }) => {
  const [selected, setSelected] = useState(get(items[0], 'value'));

  return (
    <div
      css={css`
        border: 2px solid var(--color-white);
        background-color: var(--color-white);
        display: inline-flex;
        border-radius: 3px;

        button {
          border: 0;
          border-radius: 3px;
          background: none;
          font-size: 0.75em;
          padding: 0.5em 1em;
          cursor: pointer;
          user-select: none;
          flex-grow: 1;

          &[aria-pressed='true'] {
            color: var(--color-white);
            background-color: var(--color-brand-600);
          }

          &[disabled='true'] {
            color: var(--color-neutrals-500);
            background-color: var(--color-brand-600);
            cursor: default;
          }
        }

        .dark-mode & {
          border-color: var(--primary-background-color);
          background-color: var(--primary-background-color);

          button {
            color: var(--primary-text-color);

            &[aria-pressed='true'] {
              color: var(--color-white);
            }

            &[disabled='true'] {
              color: var(--color-brand-600);
            }
          }
        }
      `}
    >
      {items.map((item, index) => {
        const value = get(item, 'value');

        return (
          <button
            type="button"
            key={index}
            tabIndex={index}
            value={value}
            aria-pressed={selected === value}
            disabled={item.disabled}
            onClick={(e) => {
              if (item.disabled) return;
              setSelected(value);
              onChange && onChange(e, value);
            }}
          >
            {get(item, 'label')}
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
};

export default SegmentedControl;
