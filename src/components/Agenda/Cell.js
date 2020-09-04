import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Cell = styled.div`
  padding: 1rem;
  box-shadow: 0 0 0 1px var(--color-neutrals-400);
  background-color: ${({ inactive }) =>
    inactive ? 'var(--color-neutrals-100)' : '#fff'};

  .dark-mode & {
    background-color: ${({ inactive }) =>
      inactive ? '#284049' : 'var(--color-dark-100)'};
    box-shadow: 0 0 0 1px var(--color-dark-400);
  }
`;

Cell.propTypes = {
  inactive: PropTypes.bool,
};

export default Cell;
