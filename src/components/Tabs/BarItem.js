import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import useTabs from './useTabs';

const BarItem = ({ index, children, id, count, disabled }) => {
  const [currentTab, setCurrentTab] = useTabs();

  const isSelected =
    id === currentTab || (currentTab === undefined && index === 0);

  return (
    <div
      onClick={() => !disabled && setCurrentTab(id)}
      css={css`
        flex-grow: 1;
        text-align: center;
        padding: 0.5em 0;
        border-bottom: 1px solid var(--color-neutrals-300);
        cursor: pointer;
        user-select: none;

        .dark-mode & {
          border-bottom-color: var(--color-dark-300);
        }

        &:hover {
          color: var(--color-brand-500);

          span {
            color: var(--primary-text-color);
          }

          .dark-mode & {
            color: var(--color-brand-400);
          }
        }

        ${disabled &&
        css`
          color: var(--color-neutrals-500);
          cursor: default;

          .dark-mode & {
            color: var(--color-dark-500);
          }

          &:hover {
            color: var(--color-neutrals-500);

            .dark-mode & {
              color: var(--color-dark-500);
            }

            span {
              color: var(--color-neutrals-500);

              .dark-mode & {
                color: var(--color-dark-500);
              }
            }
          }
        `}

        ${isSelected &&
        css`
          color: var(--color-brand-500);
          border-bottom-width: 3px;
          border-bottom-color: var(--color-brand-500);

          .dark-mode & {
            color: var(--color-brand-400);
            border-bottom-color: var(--color-brand-400);
          }
        `}
      `}
    >
      {children}
      {(count || count === 0) && (
        <span
          css={css`
            display: inline-block;
            margin-left: 0.5em;
            padding: 0 0.25em;
            background-color: var(--color-neutrals-100);
            border-radius: 4px;

            .dark-mode & {
              background-color: var(--color-dark-100);
            }

            ${isSelected &&
            css`
              color: var(--primary-text-color);
            `}

            ${disabled &&
            css`
              background: none;
              border: 1px solid var(--color-neutrals-100);

              .dark-mode & {
                border-color: var(--color-dark-100);
              }
            `}
          `}
        >
          {count}
        </span>
      )}
    </div>
  );
};

BarItem.propTypes = {
  index: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  count: PropTypes.number,
  disabled: PropTypes.bool,
};

export default BarItem;
