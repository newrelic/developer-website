import PropTypes from 'prop-types';

// NOTE: while creating a recursive data structure is feasible,
// it is not very performant.
export const link = PropTypes.shape({
  displayName: PropTypes.string.isRequired,
  url: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.array,
});

export const pageContext = PropTypes.shape({
  fileRelativePath: PropTypes.string,
});
