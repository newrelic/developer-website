import React, { useState } from 'react';
import PropTypes from 'prop-types';

const get = (x, key) =>
  Object.prototype.hasOwnProperty.call(x, key) ? x[key] : x;

const SegmentedControl = ({ items, onChange }) => {
  const [selected, setSelected] = useState(get(items[0], 'value'));

  return (
    <div>
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
