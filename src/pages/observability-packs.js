import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import React from 'react';
import DevSiteSeo from '../components/DevSiteSeo';
import { css } from '@emotion/react';
import PackTile from '../components/PackTile';
import PackList from '../components/PackList';
import { SearchInput, Button } from '@newrelic/gatsby-theme-newrelic';
import * as styles from './observability-packs.module.scss';

const LIST_VIEWS = {
  GRID: 'grid',
  LIST: 'list',
};

const ObservabilityPacksPage = ({ data, listView }) => {
  const {
    allObservabilityPacks: { nodes: o11yPacks },
  } = data;

  return (
    <>
      <SearchInput
        size={SearchInput.SIZE.LARGE}
        width={'100%'}
        css={css`
          margin: 15px 0;
        `}
        onClear={() => console.log('clear me')}
      />
      <div
        css={css`
          background-color: var(--color-neutrals-100);
          margin: 15px 0;
          height: 75px;
          .dark-mode & {
            background-color: var(--color-dark-100);
          }
        `}
      >
        <span>Showing {o11yPacks.length} results</span>
        <div>
          <span>Sort by</span>
        </div>
      </div>
      <div>
        <PackList>
          {o11yPacks.map((pack) => {
            const imgSrc = pack.dashboards?.[0]?.screenshots?.[0];
            return (
              <PackTile
                name={pack.name}
                description={pack.description}
                featuredImageUrl={
                  imgSrc || 'https://via.placeholder.com/400x275.png?text=Image'
                }
                to={`/observability-packs/${pack.name}/${pack.id}`}
              >
                {pack.name}
              </PackTile>
            );
          })}
        </PackList>
      </div>
    </>
  );
};

ObservabilityPacksPage.defaultProps = {
  listView: 'grid',
};

ObservabilityPacksPage.propTypes = {
  data: PropTypes.object.isRequired,
  listView: PropTypes.oneOf(Object.values(LIST_VIEWS)).isRequired,
};

export const pageQuery = graphql`
  query {
    allObservabilityPacks {
      nodes {
        id
        name
        website
        logo
        level
        dashboards {
          description
          name
          screenshots
          url
        }
        alerts {
          definition
          name
          url
        }
        authors
        description
        icon
      }
    }
  }
`;

export default ObservabilityPacksPage;
