import React from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';

const QuickstartSort = ({ className }) => {
  const params = new URLSearchParams(location.search);
  const sortParam = params.get('sort');
  const handleChange = (event) => {
    params.set('sort', event.target.value);
    navigate(`/instant-observability?${params.toString()}`);
  };
  return (
    <>
      <select
        className={className}
        onChange={handleChange}
        name="catalog-sort"
        value={sortParam || 'RELEVANCE'}
      >
        <option value="ALPHABETICAL">Alphabetical</option>
        <option value="POPULARITY">Popularity</option>
        <option value="RELEVANCE">Relevance</option>
        <option value="REVERSE_ALPHABETICAL">Reverse Alphabetical</option>
      </select>
    </>
  );
};

QuickstartSort.propTypes = {
  className: PropTypes.string,
};
export default QuickstartSort;
