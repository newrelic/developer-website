import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import React from 'react';
import DevSiteSeo from '../components/DevSiteSeo';
import { css } from '@emotion/react';
import PackTile from '../components/PackTile';
import PackList from '../components/PackList';
import slugify from '../utils/slugify';
import { SearchInput, Button, Dropdown } from '@newrelic/gatsby-theme-newrelic';

const ObservabilityPacksPage = ({ data, location }) => {
  const {
    allObservabilityPacks: { nodes: o11yPacks },
  } = data;

  return (
    <>
      <DevSiteSeo title="Observability Packs" location={location} />
      <SearchInput
        size={SearchInput.SIZE.LARGE}
        width="100%"
        css={css`
          margin: 15px 0;
        `}
        onClear={() => null}
        placeholder="Search for an observability pack"
      />
      <div
        css={css`
          background-color: var(--color-neutrals-100);
          margin: 15px 0;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          .dark-mode & {
            background-color: var(--color-dark-100);
          }
        `}
      >
        <span>Showing {o11yPacks.length} results</span>
        <div
          css={css`
            display: flex;
          `}
        >
          <div
            css={css`
              margin: 0 0.5rem;
            `}
          >
            <span
              css={css`
                font-size: 12px;
                font-weight: bold;
              `}
            >
              Sort by
            </span>
            <Dropdown align="left">
              <Dropdown.Toggle
                css={css`
                  background-color: var(--color-white);
                  .dark-mode & {
                    background-color: transparent;
                  }
                `}
                size={Button.SIZE.SMALL}
                variant={Button.VARIANT.OUTLINE}
              >
                Popularity
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.MenuItem>Item 1</Dropdown.MenuItem>
                <Dropdown.MenuItem>Item 2</Dropdown.MenuItem>
                <Dropdown.MenuItem>Item 3</Dropdown.MenuItem>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div
            css={css`
              margin: 0 0.5rem;
            `}
          >
            <span
              css={css`
                font-size: 12px;
                font-weight: bold;
              `}
            >
              Filter packs containing
            </span>
            <Dropdown align="left">
              <Dropdown.Toggle
                css={css`
                  background-color: var(--color-white);
                  .dark-mode & {
                    background-color: transparent;
                  }
                `}
                size={Button.SIZE.SMALL}
                variant={Button.VARIANT.OUTLINE}
              >
                Anything
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.MenuItem>Item 1</Dropdown.MenuItem>
                <Dropdown.MenuItem>Item 2</Dropdown.MenuItem>
                <Dropdown.MenuItem>Item 3</Dropdown.MenuItem>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div>
          <Button variant={Button.VARIANT.PRIMARY}>Grid view</Button>
          <Button variant={Button.VARIANT.OUTLINE}>List view</Button>
        </div>
      </div>
      <div>
        <PackList>
          {o11yPacks.map((pack) => {
            // TODO: Figure out what image should be shown
            // if not added to API explicitly
            const imgSrc = pack.dashboards?.[0]?.screenshots?.[0];
            return (
              <PackTile
                name={pack.name}
                key={pack.id}
                supportLevel={pack.level}
                description={pack.description}
                featuredImageUrl={
                  imgSrc || 'https://via.placeholder.com/400x275.png?text=Image'
                }
                to={`/observability-packs/${slugify(pack.name)}/${pack.id}`}
              />
            );
          })}
        </PackList>
      </div>
    </>
  );
};

ObservabilityPacksPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object,
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
