import React from 'react';
import { css } from '@emotion/react';
import pluralize from 'pluralize';
import { Surface, Link, Icon } from '@newrelic/gatsby-theme-newrelic';
import Intro from '../Intro';
import { quickstart } from '../../types';

const QuickstartDataSources = ({ quickstart }) => (
  <>
    <Intro
      css={css`
        margin-bottom: 16px;
      `}
    >
      {quickstart.name} observability quickstart contains{' '}
      {pluralize('data source', quickstart.documentation?.length ?? 0, true)}.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Aenean et tortor at
      risus. Platea dictumst quisque sagittis purus sit amet volutpat consequat
      mauris.{' '}
    </Intro>

    <div
      css={css`
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(3, 1fr);

        @media (max-width: 1180px) {
          grid-template-columns: repeat(1, 1fr);
        }
      `}
    >
      {quickstart.documentation.map((doc, index) => (
        <Surface
          key={index}
          base={Surface.BASE.PRIMARY}
          css={css`
            padding: 1rem;
          `}
          interactive
        >
          <Link
            to={doc.url}
            css={css`
              text-decoration: none;
              color: inherit;
            `}
          >
            <h3
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <Icon name="nr-documentation" />
              <span
                css={css`
                  margin-left: 0.5rem;
                `}
              >
                {doc.name}
              </span>
            </h3>
            {doc.description && <p>{doc.description}</p>}
          </Link>
        </Surface>
      ))}
    </div>
  </>
);

QuickstartDataSources.propTypes = {
  quickstart: quickstart.isRequired,
};

export default QuickstartDataSources;
