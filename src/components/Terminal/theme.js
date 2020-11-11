import { css } from '@emotion/core';

export default css`
  .namespace {
    opacity: 0.7;
  }
  .token {
    &.plain:empty {
      display: inline-block;
    }

    &.comment {
      color: var(--color-nord-3);
    }

    &.punctuation,
    &.operator {
      color: var(--color-nord-9);
    }

    &.constant {
      color: var(--color-nord-15);
    }

    &.string {
      color: var(--color-nord-14);
    }
  }
`;
