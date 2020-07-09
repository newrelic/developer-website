import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const VARIANTS = {
  PLAIN: 'plain',
  PRIMARY: 'primary',
  NORMAL: 'normal',
};

const SIZES = {
  SMALL: 'small',
};

const styles = {
  size: {
    [SIZES.SMALL]: css`
      font-size: 0.75rem;
    `,
  },
  variant: {
    [VARIANTS.PRIMARY]: css`
      color: var(--color-white);
      border-color: var(--color-brand-800);
      background-color: var(--color-brand-800);

      .dark-mode & {
        color: var(--primary-background-color);
        background-color: var(--color-brand-400);
        border-color: var(--color-brand-400);
      }
    `,
    [VARIANTS.NORMAL]: css`
      color: var(--color-neutrals-800);
      border-color: var(--color-neutrals-100);
      background-color: var(--color-neutrals-100);

      .dark-mode & {
        color: var(--color-white);
        border-color: var(--color-dark-100);
        background-color: var(--color-dark-100);
      }
    `,
    [VARIANTS.PLAIN]: css`
      color: var(--color-brand-800);
      border-color: transparent;
      background-color: transparent;

      .dark-mode & {
        color: var(--color-brand-400);
      }
    `,
  },
};

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 3px;
  font-family: var(--primary-font-family);
  line-height: 1;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;

  ${({ variant }) => styles.variant[variant]}
  ${({ size }) => styles.size[size]}
`;

Button.VARIANT = VARIANTS;
Button.SIZE = SIZES;

Button.propTypes = {
  size: PropTypes.oneOf(Object.values(Button.SIZE)),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(Object.values(Button.VARIANT)).isRequired,
};

export default Button;
