import React from 'react';
import { css } from '@emotion/react';
import SuperTile from './SuperTile';
import { Button, useTessen } from '@newrelic/gatsby-theme-newrelic';
import { Link } from 'gatsby';

const CodeStreamTile = () => {
  const tessen = useTessen();

  const link =
    '/instant-observability/codestream/29bd9a4a-1c19-4219-9694-0942f6411ce7/';

  const handleButtonClick = () => {
    tessen.track({
      eventName: 'clickSuperTile',
      category: 'QuickstartLanding',
      tile: 'codestream',
    });
  };

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
              color: var(--color-neutrals-600);
              .dark-mode & {
                color: var(--primary-text-color);
              }
            `}
          >
            CodeStream supercharges development workflows by putting
            collaboration tools in your IDE.
          </span>
        </div>
        <div>
          <Button
            css={css`
              border-color: var(--color-brand-400);
              color: var(--color-brand-400);

              .dark-mode & {
                color: var(--color-brand-400);
              }
            `}
            onClick={handleButtonClick}
            variant={Button.VARIANT.OUTLINE}
            to={link}
            as={Link}
          >
            Install CodeStream
          </Button>
        </div>
      </div>
    </SuperTile>
  );
};

export default CodeStreamTile;
