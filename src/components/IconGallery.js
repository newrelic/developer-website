import React, { useState } from 'react';
import * as styles from './IconGallery.module.scss';
import IconReference from './IconReference';
import SearchInput from './SearchInput';

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
        <SearchInput
          className={styles.search}
          placeholder="Filter icons by name"
          onClear={() => setSearch('')}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
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
