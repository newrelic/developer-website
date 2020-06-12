import React, { useMemo, useState } from 'react';
import styles from './IconGallery.module.scss';
import useClipboard from '../hooks/useClipboard';

const IconGallery = () => {
  if (typeof window === 'undefined') global.window = {};

  // Get the Icon component when available
  const Icon = useMemo(() => window.__NR1_SDK__.default.Icon, [
    window?.__NR1_SDK__,
  ]);
  if (!Icon) return null;

  // Copy icon name
  const [copied, copyIcon] = useClipboard();

  // Basic search / filtering
  const [search, updateSearch] = useState('');
  const types = Object.keys(Icon.TYPE);
  const filteredTypes = search
    ? types.filter((type) => type.toLowerCase().includes(search.toLowerCase()))
    : types;

  return (
    <>
      <h2>Icon Gallery</h2>

      <form className={styles.iconFilter}>
        <input
          type="text"
          name="filter"
          placeholder="Filter icons by name"
          value={search}
          onChange={(e) => updateSearch(e.target.value)}
        />
      </form>

      {filteredTypes.length ? (
        <div className={styles.iconGrid}>
          {filteredTypes.map((type, index) => (
            <button type="button" key={index} onClick={() => copyIcon(type)}>
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
