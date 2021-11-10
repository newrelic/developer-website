import React from 'react';
import { css } from '@emotion/react';
import SuperTile from './SuperTile';
import { Button } from '@newrelic/gatsby-theme-newrelic';

const CodeStreamTile = () => {
  return (
    <SuperTile>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          gap: 40px;
        `}
      >
        <div>
          <span
            css={css`
              color: var(--color-brand-400);
              font-size: 14px;
              line-height: 20px;
            `}
          >
            Tools & Communications
          </span>
          <h2
            css={css`
              font-size: 24px;
              font-weight: 600;
              line-height: 30px;
            `}
          >
            Introducing CodeStream
          </h2>
          <span
            css={css`
              color: var(--primary-text-color);
            `}
          >
            CodeStream supercharges development workflows by putting
            collaboration tools in your IDE.
          </span>
        </div>
        <div>
          <Button variant={Button.VARIANT.OUTLINE}>Install CodeStream</Button>
        </div>
      </div>
    </SuperTile>
  );
};

export default CodeStreamTile;
