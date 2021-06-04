import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import React, { useState, useEffect } from 'react';
import DevSiteSeo from '../components/DevSiteSeo';
import { css } from '@emotion/react';
import PackTile from '../components/PackTile';
import PackList from '../components/PackList';
import { SearchInput, Button, Dropdown } from '@newrelic/gatsby-theme-newrelic';
import { useQueryParam, StringParam } from 'use-query-params';

const ObservabilityPacksPage = ({ data, location }) => {
  const {
    allObservabilityPacks: { nodes: o11yPacks },
  } = data;
  const [filteredPacks, setFilteredPacks] = useState(o11yPacks);
  const [containingFilterState, setContainingFilterState] = useState(
    'Anything'
  );
  const [sortState, setSortState] = useState('Alphabetical');
  const [searchTerm, setSearchTerm] = useState('');
  const [querySearch, setQuerySearch] = useQueryParam('search', StringParam);
  const [queryFilter, setQueryFilter] = useQueryParam('filter', StringParam);
  const [querySort, setQuerySort] = useQueryParam('sort', StringParam);

  useEffect(() => {
    if (querySearch) {
      setSearchTerm(querySearch);
    }
    if (queryFilter) {
      setContainingFilterState(queryFilter);
    }
    if (querySort) {
      setSortState(querySort);
    }
  }, [querySearch, queryFilter, querySort]);

  useEffect(() => {
    let tempFilteredPacks = o11yPacks.filter(
      (pack) =>
        pack.name.toLowerCase().includes(searchTerm) ||
        pack.description.toLowerCase().includes(searchTerm)
    );

    if (containingFilterState !== 'Anything') {
      tempFilteredPacks = tempFilteredPacks.filter(
        (pack) => pack[containingFilterState.toLowerCase()]?.length > 0
      );
    }

    if (sortState === 'Alphabetical') {
      tempFilteredPacks = tempFilteredPacks.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else if (sortState === 'Reverse') {
      tempFilteredPacks = tempFilteredPacks.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }

    if (searchTerm !== '') {
      setQuerySearch(searchTerm);
    } else {
      setQuerySearch(undefined);
    }
    setQueryFilter(containingFilterState);
    setQuerySort(sortState);
    setFilteredPacks(tempFilteredPacks);
  }, [
    o11yPacks,
    searchTerm,
    containingFilterState,
    sortState,
    queryFilter,
    querySort,
    querySearch,
    setQueryFilter,
    setQuerySort,
    setQuerySearch,
  ]);

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
        onChange={(e) => {
          setSearchTerm(e.target.value.toLowerCase());
        }}
        defaultValue={querySearch}
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
        <span>Showing {filteredPacks.length} results</span>
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
                {sortState}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.MenuItem
                  onClick={() => {
                    setSortState('Alphabetical');
                  }}
                >
                  Alphabetical
                </Dropdown.MenuItem>
                <Dropdown.MenuItem
                  onClick={() => {
                    setSortState('Reverse');
                  }}
                >
                  Reverse
                </Dropdown.MenuItem>
                <Dropdown.MenuItem
                  onClick={() => {
                    setSortState('Popularity');
                  }}
                >
                  Popularity
                </Dropdown.MenuItem>
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
                {containingFilterState}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.MenuItem
                  onClick={() => {
                    setContainingFilterState('Anything');
                  }}
                >
                  Anything
                </Dropdown.MenuItem>
                <Dropdown.MenuItem
                  onClick={() => {
                    setContainingFilterState('Dashboards');
                  }}
                >
                  Dashboards
                </Dropdown.MenuItem>
                <Dropdown.MenuItem
                  onClick={() => {
                    setContainingFilterState('Alerts');
                  }}
                >
                  Alerts
                </Dropdown.MenuItem>
                <Dropdown.MenuItem
                  onClick={() => {
                    setContainingFilterState('Visualizations');
                  }}
                >
                  Visualizations
                </Dropdown.MenuItem>
                <Dropdown.MenuItem
                  onClick={() => {
                    setContainingFilterState('Synthetics');
                  }}
                >
                  Synthetic Checks
                </Dropdown.MenuItem>
                <Dropdown.MenuItem
                  onClick={() => {
                    setContainingFilterState('Applications');
                  }}
                >
                  Applications
                </Dropdown.MenuItem>
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
          {filteredPacks.map((pack) => {
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
                to={`${pack.fields.slug}`}
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
        fields {
          slug
        }
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
