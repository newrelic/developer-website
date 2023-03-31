import React, { useState } from 'react';
import { css } from '@emotion/react';
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

      <form
        css={css`
          padding: 1rem;
          padding-left: 0;
        `}
      >
        <SearchInput
          css={css`
            width: 60%;
            margin: 1rem 0;
            height: auto;
          `}
          placeholder="Filter icons by name"
          onClear={() => setSearch('')}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </form>

      {filteredTypes.length ? (
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(4rem, 1fr));
          `}
        >
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
