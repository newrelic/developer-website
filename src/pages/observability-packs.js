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
  useQueryParams,
  ExternalLink,
} from '@newrelic/gatsby-theme-newrelic';
import { useDebounce } from 'react-use';
import { navigate } from '@reach/router';
import BUILD_YOUR_OWN from '../images/build-your-own.svg';

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
  const [searchExpanded, setSearchExpanded] = useState(false);

  const { queryParams } = useQueryParams();

  const [formState, setFormState] = useState({
    search: queryParams.get('search'),
    packContains: queryParams.get('packContains'),
    sort: queryParams.get('sort'),
  });

  const [view, setView] = useState(VIEWS.GRID);

  useEffect(() => {
    setFormState({
      search: queryParams.get('search'),
      packContains: queryParams.get('packContains'),
      sort: queryParams.get('sort'),
    });
  }, [queryParams]);

  const navigateToParams = (params) => {
    Object.entries(params).forEach(([key, value]) => {
      value ? queryParams.set(key, value) : queryParams.delete(key);
    });

    navigate(`?${queryParams}`);
  };

  useEffect(() => {
    const handler = (e) => {
      if (e.keyCode === 13) {
        navigateToParams(formState);
      }
    };
    document.addEventListener('keydown', handler);
    return () => {
      document.removeEventListener('keydown', handler);
    };
  });

  const searchInputRef = useRef();

  useKeyPress('s', () => {
    setSearchExpanded(!searchExpanded);
  });

  useInstrumentedData(
    { actionName: 'packViewToggle', packViewState: view },
    { enabled: Boolean(view) }
  );

  useInstrumentedData(
    { actionName: 'packSort', packSortState: formState.sort },
    { enabled: Boolean(formState.sort) }
  );

  useInstrumentedData(
    { actionName: 'packFilter', packFilterState: formState.packContains },
    { enabled: Boolean(formState.packContains) }
  );

  const handleSearchButtonClick = () => {
    setSearchExpanded(true);
    tessen.track('observabilityPack', `packSearchButtonClick`);
    if (typeof window !== 'undefined' && window.newrelic) {
      window.newrelic.addPageAction('packSearchButtonClick');
    }
  };

  const handleBlurSearch = () => {
    if (!formState.search) {
      setSearchExpanded(false);
    }
  };

  useDebounce(
    () => {
      if (formState.search && formState.search !== '') {
        tessen.track('observabilityPack', `packSearch`, {
          packSearchTerm: formState.search,
        });
        if (typeof window !== 'undefined' && window.newrelic) {
          window.newrelic.addPageAction('packSearch', {
            packSearchTerm: formState.search,
          });
        }
      }
    },
    1000,
    [formState.search]
  );

  useEffect(() => {
    const duration = 500;
    searchExpanded
      ? setTimeout(() => searchInputRef.current.focus(), duration)
      : setTimeout(() => searchInputRef.current.blur(), duration);
  }, [searchExpanded]);

  useEffect(() => {
    let tempFilteredPacks = queryParams.has('search')
      ? o11yPacks.filter(
          (pack) =>
            pack.name.toLowerCase().includes(queryParams.get('search')) ||
            pack.description.toLowerCase().includes(queryParams.get('search'))
        )
      : o11yPacks;

    if (
      queryParams.has('packContains') &&
      queryParams.get('packContains') !== 'All'
    ) {
      tempFilteredPacks = tempFilteredPacks.filter(
        (pack) =>
          pack[queryParams.get('packContains').toLowerCase()]?.length > 0
      );
    }

    if (queryParams.has('sort') && queryParams.get('sort') === 'Alphabetical') {
      tempFilteredPacks = tempFilteredPacks.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else if (
      queryParams.has('sort') &&
      queryParams.get('sort') === 'Reverse'
    ) {
      tempFilteredPacks = tempFilteredPacks.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }
    setFilteredPacks(tempFilteredPacks);
  }, [queryParams, o11yPacks]);

  useEffect(() => {
    setView(view);
  }, [view]);

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
              value={formState.search || ''}
              placeholder="Search pack names / descriptions"
              css={css`
                ${searchExpanded ? `display: block;` : `display: none;`}
                @media screen and (max-width: 1180px) {
                  display: block;
                }
              `}
              onClear={() => {
                setFormState((state) => ({
                  ...state,
                  search: null,
                }));
              }}
              onChange={(e) => {
                setFormState((state) => ({
                  ...state,
                  search: e.target.value.toLowerCase(),
                }));
              }}
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
                value={formState.sort || 'Alphabetical'}
                onChange={(e) => {
                  setFormState((state) => ({
                    ...state,
                    sort: e.target.value,
                  }));
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
                value={formState.packContains || 'All'}
                onChange={(e) => {
                  setFormState((state) => ({
                    ...state,
                    packContains: e.target.value,
                  }));
                  document.getElementById(e.target.id).blur();
                  tessen.track('observabilityPack', `packFilter`, {
                    packFilterState: formState.packContains,
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
        <ExternalLink
          href="https://github.com/newrelic/newrelic-observability-packs"
          css={css`
            text-decoration: none;
          `}
        >
          <PackTile
            css={
              view === VIEWS.GRID &&
              css`
                height: 100%;
              `
            }
            view={view}
            logoUrl={BUILD_YOUR_OWN}
            name="Build your own observability pack"
            description="Can't find a pack with what you need? Check out our README and build your own."
          />
        </ExternalLink>
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
