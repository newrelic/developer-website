import React, { useState } from 'react';
import styles from './IconGallery.module.scss';
import IconReference from './IconReference';

const IconGallery = () => {
  if (typeof window === 'undefined') global.window = {};

  const [search, setSearch] = useState('');

  // Get the Icon component when available
  const { Icon } = window.__NR1_SDK__?.default ?? {};
  if (!Icon) return null;

  // Basic search / filtering
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
            <IconReference key={type} type={type} />
          ))}
        </div>
      ) : (
        <div>No results for "{search}"</div>
      )}
    </>
  );
};

export default IconGallery;
