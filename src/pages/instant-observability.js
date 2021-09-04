import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import React, { useState, useEffect, useRef } from 'react';
import useMobileDetect from 'use-mobile-detect-hook';
import DevSiteSeo from '../components/DevSiteSeo';
import { css } from '@emotion/react';
import SegmentedControl from '../components/SegmentedControl';
import PackTile from '../components/PackTile';
import MobileQuickstartFilter from '../components/MobileQuickstartFilter';
import {
  SearchInput,
  useTessen,
  useInstrumentedData,
  useQueryParams,
  ExternalLink,
  Button,
  Icon,
} from '@newrelic/gatsby-theme-newrelic';
import { useDebounce } from 'react-use';
import { navigate } from '@reach/router';
import BUILD_YOUR_OWN from '../images/build-your-own.svg';

const { QUICKSTARTS_REPO } = require('../data/constants');

// const packContentsFilterGroups = [
//   'All',
//   'Dashboards',
//   'Alerts',
//   'Data sources',
// ];

const FILTERS = [
  { name: 'All', type: 'all', icon: 'nr-all-entities' },
  { name: 'Dashboards', type: 'dashboard', icon: 'nr-dashboard' },
  { name: 'Alerts', type: 'alerts', icon: 'nr-alert' },
  { name: 'Data sources', type: 'documentation', icon: 'nr-document' },
];

const VIEWS = {
  GRID: 'Grid view',
  LIST: 'List view',
};

/**
 * Filters a quickstart based on a provided search term.
 * @param {String} search Search term.
 * @returns {(Object) => Boolean} Callback function to be used by filter.
 */
const filterBySearch = (search) => ({ name, description }) =>
  name.toLowerCase().includes(search.toLowerCase()) ||
  description.toLowerCase().includes(search.toLowerCase());

/**
 * Filters a quickstart based on a content type.
 * @param {String} type The content type (e.g. 'alerts').
 * @returns {(Object) => Boolean} Callback function to be used by filter.
 */
const filterByContentType = (type) => (quickstart) =>
  type === 'all' || (quickstart[type] && quickstart[type].length > 0);

const QuickstartsPage = ({ data, location }) => {
  /*
  const tessen = useTessen();
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  const {
    allQuickstarts: { nodes: quickstarts },
  } = data;

  const [filteredPacks, setFilteredPacks] = useState(quickstarts);

  const { queryParams } = useQueryParams();

  const [formState, setFormState] = useState({
    search: queryParams.get('search'),
    packContains: queryParams.get('packContains'),
  });

  const [view, setView] = useState(VIEWS.GRID);

  useEffect(() => {
    setFormState({
      search: queryParams.get('search'),
      packContains: queryParams.get('packContains'),
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

  useInstrumentedData(
    { actionName: 'packViewToggle', packViewState: view },
    { enabled: Boolean(view) }
  );

  useInstrumentedData(
    { actionName: 'packFilter', packFilterState: formState.packContains },
    { enabled: Boolean(formState.packContains) }
  );

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
    let tempFilteredPacks = queryParams.has('search')
      ? quickstarts.filter(
          (pack) =>
            pack.name.toLowerCase().includes(queryParams.get('search')) ||
            pack.description.toLowerCase().includes(queryParams.get('search'))
        )
      : quickstarts;

    if (
      queryParams.has('packContains') &&
      queryParams.get('packContains') !== 'All'
    ) {
      tempFilteredPacks = tempFilteredPacks.filter(
        (pack) =>
          pack[queryParams.get('packContains').toLowerCase()]?.length > 0
      );
    }

    setFilteredPacks(tempFilteredPacks);
  }, [queryParams, quickstarts]);

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
  */

  // yes
  const detectMobile = useMobileDetect();
  const tessen = useTessen();

  // maybe?
  // const searchInputRef = useRef();
  const packContentsFilterValues = [];
  // const view = VIEWS.GRID;
  // const filteredPacks = [];
  const formState = {};

  // new
  const [view, setView] = useState(VIEWS.GRID);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const quickstarts = data.allQuickstarts.nodes;

  const filteredQuickstarts = quickstarts
    .filter(filterBySearch(search))
    .filter(filterByContentType(filter));

  const filtersWithCount = FILTERS.map((filter) => ({
    ...filter,
    count: filteredQuickstarts.filter(filterByContentType(filter.type)).length,
  }));

  return (
    <>
      <DevSiteSeo
        title="Instant Observability"
        location={location}
        type="quickstarts"
      />
      <div
        css={css`
          --sidebar-width: 300px;

          display: grid;
          grid-template-columns: var(--sidebar-width) minmax(0, 1fr);
          grid-template-areas: 'sidebar main';
          grid-template-rows: 1fr auto;
          min-height: calc(100vh - var(--global-header-height));
          margin: 0 auto;
          max-width: var(--site-max-width);

          @media screen and (max-width: 760px) {
            grid-template-columns: minmax(0, 1fr);
            grid-template-areas:
              'sidebar'
              'main';
            grid-template-rows: unset;
          }
        `}
      >
        <aside
          data-swiftype-index={false}
          css={css`
            grid-area: sidebar;
            border-right: 1px solid var(--divider-color);
            height: calc(100vh - var(--global-header-height));
            position: sticky;
            top: var(--global-header-height);

            @media screen and (max-width: 760px) {
              display: block;
              position: relative;
              width: 100%;
              height: 100%;
            }
          `}
        >
          <div
            css={css`
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              padding: var(--site-content-padding);
              overflow: auto;
              @media screen and (max-width: 760px) {
                position: relative;
              }
            `}
          >
            <p>
              A place to find quickstarts of resources like dashboards,
              instrumentation, and alerts to help you monitor your environment.
            </p>
            <aside
              css={css`
                border-bottom: 1px solid var(--divider-color);
                margin-bottom: 1.5rem;
              `}
            />
            <FormControl>
              <Label htmlFor="packContentsFilter">FILTER BY</Label>
              {detectMobile.isMobile() ? (
                <MobileQuickstartFilter
                  filter={filter}
                  setFilter={setFilter}
                  filters={filtersWithCount}
                />
              ) : (
                filtersWithCount.map(({ name, type, icon, count }) => (
                  <Button
                    type="button"
                    key={name}
                    onClick={() => setFilter(type)}
                    css={css`
                      padding: 1rem 0;
                      width: 100%;
                      display: flex;
                      justify-content: flex-start;
                      color: var(--primary-text-color);
                      font-weight: 100;
                      background: ${filter === type
                        ? 'var(--divider-color)'
                        : 'none'};
                    `}
                  >
                    <Icon
                      name={icon}
                      css={css`
                        fill: currentColor;
                        stroke-width: ${name === 'All' ? 1 : 0.25};
                        margin: 0 0.5rem;
                      `}
                    />
                    {`${name} (${count})`}
                  </Button>
                ))
              )}
            </FormControl>
          </div>
        </aside>
        <div
          css={css`
            grid-area: main;
            padding: var(--site-content-padding);
          `}
        >
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
            <div
              css={css`
                display: flex;
                align-items: center;
                width: 100%;

                > * {
                  margin: 0 0.1rem;
                }
              `}
            >
              <div
                css={css`
                  width: 100%;
                  margin-left: 20px;
                  input {
                    background: inherit;
                  }
                `}
              >
                <SearchInput
                  size={SearchInput.SIZE.LARGE}
                  value={search}
                  placeholder="Search pack names / descriptions. Enter to search"
                  onClear={() => setSearch('')}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div
                css={css`
                  display: inline-block;
                  min-width: 155px;
                  margin-left: 20px;
                `}
              >
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
          </div>
          <div
            css={css`
              margin: 2em 0;
            `}
          >
            <span>Showing {filteredQuickstarts.length} results</span>
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
              href={QUICKSTARTS_REPO}
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
                name="Build your own quickstart"
                description="Can't find a pack with what you need? Check out our README and build your own."
              />
            </ExternalLink>
            {filteredQuickstarts.map((pack) => (
              <PackTile key={pack.id} view={view} {...pack} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

QuickstartsPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object,
};

export const pageQuery = graphql`
  query {
    allQuickstarts {
      nodes {
        fields {
          slug
        }
        id
        name
        websiteUrl
        logoUrl
        packUrl
        level
        dashboards {
          description
          name
          screenshots
          url
        }
        alerts {
          details
          name
          url
          type
        }
        documentation {
          name
          url
          description
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
      display: flex;
      flex-direction: column;
      align-items: flex-start;

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

export default QuickstartsPage;
