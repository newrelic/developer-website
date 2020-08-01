import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { rgba } from 'polished';

const isInteractive = ({ as, interactive }) =>
  interactive || as === 'a' || as === Link;

const Tag = styled.span`
  color: var(--color-neutrals-600);
  background: var(--color-neutrals-100);
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  transition: all 0.07s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backface-visibility: hidden;

  .dark-mode & {
    color: var(--color-dark-700);
    background: var(--color-dark-200);
  }

  ${(props) =>
    isInteractive(props) &&
    css`
      &:hover {
        cursor: pointer;
        color: var(--color-brand-800);
        background: ${rgba('#70ccd2', 0.17)};
        transform: translateY(-1px);

        .dark-mode & {
          color: var(--color-brand-400);
        }
      }
    `}
`;

Tag.propTypes = {
  interactive: PropTypes.bool,
};

Tag.defaultProps = {
  interactive: false,
};

export default Tag;
