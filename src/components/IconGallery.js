import React, { useMemo } from 'react';
import styles from './IconGallery.module.scss';

const IconGallery = () => {
  if (typeof window === 'undefined') global.window = {};

  // Get the Icon component when available
  const Icon = useMemo(() => window.__NR1_SDK__.default.Icon, [
    window?.__NR1_SDK__,
  ]);
  console.log('foo');

  // If we don't have the component, don't render anything
  if (!Icon) return null;

  return (
    <>
      <h2>Icon Gallery</h2>
      <div className={styles.iconGrid}>
        {Object.keys(Icon.TYPE).map((type, index) => (
          <div key={index}>
            <Icon className={styles.icon} type={Icon.TYPE[type]} />
            <span className={styles.iconName}>{type}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default IconGallery;
