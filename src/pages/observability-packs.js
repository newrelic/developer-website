import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import React, { useState, useEffect } from 'react';
import DevSiteSeo from '../components/DevSiteSeo';
import { css } from '@emotion/react';
// import PackGrid from '../components/PackGrid';
// import PackGridTile from '../components/PackGridTile';
// import PackListTile from '../components/PackListTile';
// import PackList from '../components/PackList';
import Select from '../components/Select';
import SegmentedControl from '../components/SegmentedControl';
import {
  Icon,
  Link,
  SearchInput,
  Surface,
} from '@newrelic/gatsby-theme-newrelic';
import { useQueryParam, StringParam } from 'use-query-params';

import DEFAULT_IMAGE from '../images/new-relic-logo.png';

const sortOptionValues = ['Alphabetical', 'Reverse', 'Popularity'];
const packContentsFilterValues = [
  'Anything',
  'Dashboards',
  'Alerts',
  'Visualizations',
  'Synthetics Checks',
  'Applications',
];

const VIEWS = {
  GRID: 'Grid view',
  LIST: 'List view',
};

const LEVELS = {
  NEWRELIC: 'NEWRELIC',
};

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

  const [view, setView] = useState(VIEWS.GRID);

  useEffect(() => {
    setView(view);
  }, [view]);
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
          @media screen and (max-width: 1180px) {
            flex-direction: column;
            align-items: normal;
            > * {
              margin: 0.5rem 0;
            }
          }
        `}
      >
        <span>Showing {filteredPacks.length} results</span>
        <div
          css={css`
            display: flex;
            @media screen and (max-width: 1180px) {
              flex-direction: column;
              align-items: normal;
              > * {
                margin: 0.5rem 0;
              }
            }
          `}
        >
          <FormControl>
            <Label htmlFor="sortFilter">Sort by</Label>
            <Select
              id="sortFilter"
              value={sortState}
              onChange={(e) => {
                setSortState(e.target.value);
                document.getElementById(e.target.id).blur();
              }}
            >
              {sortOptionValues.map((sortOption) => (
                <option key={sortOption} value={sortOption}>
                  {sortOption}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl>
            <Label htmlFor="packContentsFilter">Filter packs containing</Label>
            <Select
              id="packContentsFilter"
              value={containingFilterState}
              onChange={(e) => {
                setContainingFilterState(e.target.value);
                document.getElementById(e.target.id).blur();
              }}
            >
              {packContentsFilterValues.map((packContentsItem) => (
                <option key={packContentsItem} value={packContentsItem}>
                  {packContentsItem}
                </option>
              ))}
            </Select>
          </FormControl>
        </div>
        <SegmentedControl
          items={Object.values(VIEWS)}
          onChange={(_e, view) => setView(view)}
        />
      </div>

      <div
        css={css`
          display: grid;
          grid-gap: 1rem;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: minmax(var(--guide-list-row-height, 150px), auto);

          @media (max-width: 1450px) {
            grid-template-columns: repeat(3, 1fr);
          }

          @media (max-width: 1180px) {
            grid-template-columns: repeat(1, 1fr);
          }

          ${view === VIEWS.LIST &&
          css`
            display: initial;
          `}
        `}
      >
        {filteredPacks.map((pack) => (
          <Surface
            key={pack.id}
            to={pack.fields.slug}
            as={Link}
            base={Surface.BASE.PRIMARY}
            interactive
            css={css`
              overflow: hidden;

              ${view === VIEWS.LIST &&
              css`
                display: flex;
                margin-bottom: 1em;
              `}
            `}
          >
            <img
              src={pack.logo || DEFAULT_IMAGE}
              alt={pack.name}
              onError={(e) => {
                e.preventDefault();
                e.target.src = DEFAULT_IMAGE;
              }}
              css={css`
                display: block;
                width: 100%;
                padding: 0 5%;
                height: 200px;
                background-color: var(--color-white);
                margin: auto;
                object-fit: scale-down;

                ${view === VIEWS.LIST &&
                css`
                  width: 25%;
                  padding: 0 1%;
                  max-height: 150px;
                  margin: 0;

                  @media (max-width: 1080px) {
                    display: none;
                  }
                `}
              `}
            />
            <div
              css={css`
                padding: 1em;
              `}
            >
              <h4>
                {pack.name}{' '}
                {pack.level === LEVELS.NEWRELIC && (
                  <Icon name="nr-check-shield" />
                )}
              </h4>
              <p
                css={css`
                  font-size: 0.875rem;
                  color: var(--secondary-text-color);
                `}
              >
                {pack.description}
              </p>
            </div>
          </Surface>
        ))}
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

const Label = ({ children, htmlFor }) => (
  <label
    htmlFor={htmlFor}
    css={css`
      display: block;
      font-size: 12px;
      font-weight: bold;
      margin-bottom: 0.25rem;
    `}
  >
    {children}
  </label>
);

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
};

const FormControl = ({ children }) => (
  <div
    css={css`
      margin: 0 0.5rem;

      @media screen and (max-width: 1180px) {
        margin: 0.5rem 0;
      }
    `}
  >
    {children}
  </div>
);

FormControl.propTypes = {
  children: PropTypes.node,
};

export default ObservabilityPacksPage;
