import React, { useState } from 'react';
import styles from './IconGallery.module.scss';
import useClipboard from '../hooks/useClipboard';

const IconGallery = () => {
  if (typeof window === 'undefined') global.window = {};

  // Get the Icon component when available
  const { Icon } = window.__NR1_SDK__.default;
  if (!Icon) return null;

  // Copy icon name
  const [copied, copyIcon] = useClipboard();

  // Basic search / filtering
  const [search, setSearch] = useState('');
  const types = Object.keys(Icon.TYPE);
  const filterByString = (input) => (str) =>
    str.toLowerCase().includes(input.toLowerCase());
  const filteredTypes = search ? types.filter(filterByString(search)) : types;

  return (
    <>
      <h2>Icon Gallery</h2>

      <form className={styles.iconFilter}>
        <input
          className={styles.search}
          type="text"
          name="filter"
          placeholder="Filter icons by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      {filteredTypes.length ? (
        <div className={styles.iconGrid}>
          {filteredTypes.map((type) => (
            <button
              className={styles.button}
              type="button"
              key={type}
              onClick={() => copyIcon(type)}
            >
              <Icon className={styles.icon} type={Icon.TYPE[type]} />
              <span className={styles.iconName}>
                {copied ? 'Copied!' : type}
              </span>
            </button>
          ))}
        </div>
      ) : (
        <div>No results for "{search}"</div>
      )}
    </>
  );
};

export default IconGallery;
