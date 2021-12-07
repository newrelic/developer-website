import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { navigate } from 'gatsby';

import { Button, Icon, Link } from '@newrelic/gatsby-theme-newrelic';
import { QUICKSTARTS_REPO } from '../../data/constants';

const QuickstartSort = () => {
  const handleChange = (event) => {
    console.log(event);
    const params = new URLSearchParams(location.search);
    params.set('sort', event.target.value);
    navigate(`/instant-observability?${params.toString()}`);
  };
  return (
    <>
      <label htmlFor="quickstart-sort-select">Sort</label>
      <select
        onChange={handleChange}
        name="catalog-sort"
        id="quickstart-sort-select"
      >
        <option value="ALPHABETICAL">Alphabetical</option>
        <option value="POPULARITY">Popularity</option>
        <option value="RELEVANCE">Relevance</option>
        <option value="REVERSE_ALPHABETICAL">Reverse Alphabetical</option>
      </select>
    </>
  );
};

export default QuickstartSort;
