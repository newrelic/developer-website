import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import React, { useState, useEffect, useRef } from 'react';
import DevSiteSeo from '../components/DevSiteSeo';
import { css } from '@emotion/react';
import Select from '../components/Select';
import SegmentedControl from '../components/SegmentedControl';
import PackTile from '../components/PackTile';
import {
  SearchInput,
  Icon,
  Button,
  useTessen,
  useInstrumentedData,
  useKeyPress,
} from '@newrelic/gatsby-theme-newrelic';
import { useQueryParam, StringParam } from 'use-query-params';
import { useDebounce } from 'react-use';

const sortOptionValues = ['Alphabetical', 'Reverse', 'Popularity'];
const packContentsFilterGroups = [
  'All',
  'Dashboards',
  'Alerts',
  'Visualizations',
  'Synthetics',
  'Nerdpacks',
];

const VIEWS = {
  GRID: 'Grid view',
  LIST: 'List view',
};

const ObservabilityPacksPage = ({ data, location }) => {
  const tessen = useTessen();

  const {
    allObservabilityPacks: { nodes: o11yPacks },
  } = data;

  const [filteredPacks, setFilteredPacks] = useState(o11yPacks);
  const [containingFilterState, setContainingFilterState] = useState('All');
  const [sortState, setSortState] = useState('Alphabetical');
  const [searchTerm, setSearchTerm] = useState('');
  const [view, setView] = useState(VIEWS.GRID);
  const [searchExpanded, setSearchExpanded] = useState(false);

  const [querySearch, setQuerySearch] = useQueryParam('search', StringParam);
  const [queryFilter, setQueryFilter] = useQueryParam('filter', StringParam);
  const [querySort, setQuerySort] = useQueryParam('sort', StringParam);

  const searchInputRef = useRef();

  useKeyPress('s', () => {
    setSearchExpanded(!searchExpanded);
  });

  useInstrumentedData(
    { actionName: 'packViewToggle', packViewState: view },
    { enabled: Boolean(view) }
  );

  useInstrumentedData(
    { actionName: 'packSort', packSortState: sortState },
    { enabled: Boolean(sortState) }
  );

  useInstrumentedData(
    { actionName: 'packFilter', packFilterState: containingFilterState },
    { enabled: Boolean(containingFilterState) }
  );

  const handleSearchButtonClick = () => {
    setSearchExpanded(true);
    tessen.track('observabilityPack', `packSearchButtonClick`);
    if (typeof window !== 'undefined' && window.newrelic) {
      window.newrelic.addPageAction('packSearchButtonClick');
    }
  };

  const handleBlurSearch = () => {
    if (!searchTerm) {
      setSearchExpanded(false);
    }
  };

  useDebounce(
    () => {
      if (searchTerm && searchTerm !== '') {
        tessen.track('observabilityPack', `packSearch`, {
          packSearchTerm: searchTerm,
        });
        if (typeof window !== 'undefined' && window.newrelic) {
          window.newrelic.addPageAction('packSearch', {
            packSearchTerm: searchTerm,
          });
        }
      }
    },
    1000,
    [searchTerm]
  );

  useEffect(() => {
    if (querySearch) {
      setSearchTerm(querySearch);
      setSearchExpanded(true);
    }
    if (queryFilter) {
      setContainingFilterState(queryFilter);
    }
    if (querySort) {
      setSortState(querySort);
    }
  }, [querySearch, queryFilter, querySort]);

  useEffect(() => {
    setView(view);
  }, [view]);

  useEffect(() => {
    const duration = 500;
    searchExpanded
      ? setTimeout(() => searchInputRef.current.focus(), duration)
      : setTimeout(() => searchInputRef.current.blur(), duration);
  }, [searchExpanded]);

  useEffect(() => {
    let tempFilteredPacks = o11yPacks.filter(
      (pack) =>
        pack.name.toLowerCase().includes(searchTerm) ||
        pack.description.toLowerCase().includes(searchTerm)
    );

    if (containingFilterState !== 'All') {
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
      setSearchExpanded(true);
    } else {
      setQuerySearch(undefined);
      setSearchExpanded(false);
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

  const packContentsFilterValues = packContentsFilterGroups.map(
    (filterName) => {
      if (filterName === 'All') {
        const filterCount = filteredPacks.length;
        return { filterName, filterCount };
      }
      const filterCount = filteredPacks.filter(
        (pack) => pack[filterName.toLowerCase()]
      ).length;
      return { filterName, filterCount };
    }
  );

  return (
    <>
      <DevSiteSeo title="Observability Packs" location={location} />
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
            align-items: center;
            justify-content: space-between;
            > * {
              margin: 0 0.1rem;
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
          <div
            css={css`
              align-self: flex-end;
              ${searchExpanded ? `width: 30vw;` : `width: 50px;`}
              margin-left: 20px;
              input {
                background: inherit;
              }
              @media screen and (max-width: 1450px) {
                ${searchExpanded && `width: 25vw;`}
              }
              @media screen and (max-width: 1350px) {
                ${searchExpanded && `width: 15vw;`}
              }
              @media screen and (max-width: 1180px) {
                width: 100%;
              }
            `}
            style={{
              transition: 'all 0.5s ease',
            }}
          >
            {!searchExpanded && (
              <Button
                variant={Button.VARIANT.PLAIN}
                css={css`
                  border: none;
                  @media screen and (max-width: 1180px) {
                    display: none;
                  }
                `}
                onClick={handleSearchButtonClick}
              >
                <Icon name="fe-search" size="1.5em" />
              </Button>
            )}
            <SearchInput
              ref={searchInputRef}
              value={searchTerm}
              placeholder="Search pack names / descriptions"
              css={css`
                ${searchExpanded ? `display: block;` : `display: none;`}
                @media screen and (max-width: 1180px) {
                  display: block;
                }
              `}
              onClear={() => {
                setSearchTerm('');
              }}
              onChange={(e) => {
                setSearchTerm(e.target.value.toLowerCase());
              }}
              defaultValue={querySearch}
              onBlur={handleBlurSearch}
            />
          </div>
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
                  tessen.track('observabilityPack', `packSort`, {
                    packSortState: e.target.value,
                  });
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
              <Label htmlFor="packContentsFilter">
                Filter packs containing
              </Label>
              <Select
                id="packContentsFilter"
                value={containingFilterState}
                onChange={(e) => {
                  setContainingFilterState(e.target.value);
                  document.getElementById(e.target.id).blur();
                  tessen.track('observabilityPack', `packFilter`, {
                    packFilterState: containingFilterState,
                  });
                }}
              >
                {packContentsFilterValues.map((packContentsItem) => (
                  <option
                    key={packContentsItem.filterName}
                    value={packContentsItem.filterName}
                  >
                    {`${packContentsItem.filterName} (${packContentsItem.filterCount})`}
                  </option>
                ))}
              </Select>
            </FormControl>
          </div>
          <SegmentedControl
            items={Object.values(VIEWS)}
            onChange={(_e, view) => {
              setView(view);
              tessen.track('observabilityPack', `packViewToggle`, {
                packViewState: view,
              });
            }}
          />
        </div>
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
          <PackTile key={pack.id} view={view} {...pack} />
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
        websiteUrl
        logoUrl
        level
        dashboards {
          description
          name
          screenshots
          url
        }
        authors
        description
        iconUrl
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
