import React from 'react';
import { css } from '@emotion/react';
import pluralize from 'pluralize';
import { Surface, Link, Tag, useTessen } from '@newrelic/gatsby-theme-newrelic';
import Intro from '../Intro';
import PropTypes from 'prop-types';

const QuickstartDataSources = ({ displayName, documentation, id, slug }) => {
  const tessen = useTessen();

  const handleDocsTileClick = () => {
    tessen.track({
      eventName: 'instantObservability',
      category: 'DocsTileClick',
      quickstartName: slug,
      quickstartId: id,
    });
  };

  return (
    <>
      <Intro
        css={css`
          margin-bottom: 16px;
        `}
      >
        {displayName} observability quickstart contains{' '}
        {pluralize('data source', documentation?.length ?? 0, true)}. This is
        how you'll get your data into New Relic.{' '}
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
        {documentation.map((doc, index) => (
          <Surface
            key={index}
            as={Link}
            to={doc.url}
            base={Surface.BASE.PRIMARY}
            onClick={handleDocsTileClick}
            css={css`
              padding: 1rem;
              color: inherit;
            `}
            interactive
          >
            <h3>{doc.displayName}</h3>
            {doc.description && <p>{doc.description}</p>}
            <Tag
              css={css`
                display: inline-block;
                margin-bottom: 1rem;
              `}
            >
              Docs
            </Tag>
          </Surface>
        ))}
      </div>
    </>
  );
};

QuickstartDataSources.propTypes = {
  displayName: PropTypes.string,
  documentation: PropTypes.array,
  id: PropTypes.string,
  slug: PropTypes.string,
};

export default QuickstartDataSources;
