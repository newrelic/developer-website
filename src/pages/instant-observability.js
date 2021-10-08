import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import React, { useState, useEffect } from 'react';
import useMobileDetect from 'use-mobile-detect-hook';
import DevSiteSeo from '../components/DevSiteSeo';
import { css } from '@emotion/react';
import SegmentedControl from '../components/SegmentedControl';
import PackTile from '../components/PackTile';
import IOBanner from '../components/IOBanner';
import IOLogo from '../components/IOLogo';
import Select from '../components/Select';
import BetaBanner from '../components/quickstarts/BetaBanner';
import {
  SearchInput,
  useTessen,
  ExternalLink,
  Button,
  Icon,
  Link,
} from '@newrelic/gatsby-theme-newrelic';
import { navigate } from '@reach/router';

import BUILD_YOUR_OWN from '../images/build-your-own.svg';
import GUIDED_INSTALL from '../images/guided-install.svg';
import { useDebounce } from 'react-use';
import { sortFeaturedQuickstarts } from '../utils/sortFeaturedQuickstarts';

import { QUICKSTARTS_REPO, RESERVED_QUICKSTART_IDS } from '../data/constants';
import CATEGORIES from '../data/instant-observability-categories';

const FILTERS = [
  { name: 'All', type: '', icon: 'nr-all-entities' },
  { name: 'Dashboards', type: 'dashboards', icon: 'nr-dashboard' },
  { name: 'Alerts', type: 'alerts', icon: 'nr-alert' },
  { name: 'Data sources', type: 'documentation', icon: 'nr-document' },
];

const VIEWS = {
  GRID: 'Grid view',
  LIST: 'List view',
};

/**
 * Determines if one string is a substring of the other, case insensitive
 * @param {String} substring the substring to test against
 * @returns {(Function) => Boolean} Callback function that determines if the argument has the substring
 */
const stringIncludes = (substring) => (fullstring) =>
  fullstring.toLowerCase().includes(substring.toLowerCase());

/**
 * Filters a quickstart based on a provided search term.
 * @param {String} search Search term.
 * @returns {(Function) => Boolean} Callback function to be used by filter.
 */
const filterBySearch = (search) => ({
  title,
  summary,
  description,
  keywords,
}) => {
  if (!search) {
    return true;
  }

  const searchIncludes = stringIncludes(search);
  return (
    searchIncludes(title) ||
    searchIncludes(summary) ||
    searchIncludes(description) ||
    keywords.some(searchIncludes)
  );
};

/**
 * Filters a quickstart based on a content type.
 * @param {String} type The content type (e.g. 'alerts').
 * @returns {(Function) => Boolean} Callback function to be used by filter.
 */
const filterByContentType = (type) => (quickstart) => {
  return !type || (quickstart[type] && quickstart[type].length > 0);
};

/**
 * Filters a quickstart based on a category.
 * @param {String} category The category type (e.g. 'featured').
 * @returns {(Function) => Boolean} Callback function to be used by filter.
 */
const filterByCategory = (category) => {
  const { associatedKeywords = [] } =
    CATEGORIES.find(({ value }) => value === category) || {};

  return (quickstart) =>
    !category ||
    (quickstart.keywords &&
      quickstart.keywords.find((k) => associatedKeywords.includes(k)));
};

const QuickstartsPage = ({ data, location }) => {
  const [view, setView] = useState(VIEWS.GRID);
  const isMobile = useMobileDetect().isMobile();
  const tessen = useTessen();

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam = params.get('search');
    const filterParam = params.get('filter');
    const categoryParam = params.get('category');

    setSearch(searchParam);
    setFilter(filterParam || '');
    setCategory(categoryParam || '');

    if (searchParam || filterParam || categoryParam) {
      tessen.track('instantObservability', 'QuickstartCatalogSearch', {
        filter: filterParam,
        search: searchParam,
        quickstartCategory: categoryParam,
      });
    }
  }, [location.search, tessen]);

  const handleFilter = (value) => {
    setFilter(value);
    const params = new URLSearchParams(location.search);
    params.set('filter', value);

    navigate(`?${params.toString()}`);
  };

  const handleSearch = (value) => {
    if (value !== null && value !== undefined) {
      const params = new URLSearchParams(location.search);
      params.set('search', value);

      navigate(`?${params.toString()}`);
    }
  };

  const handleCategory = (value) => {
    if (value !== null && value !== undefined) {
      const params = new URLSearchParams(location.search);
      params.set('category', value);

      navigate(`?${params.toString()}`);
    }
  };

  useDebounce(
    () => {
      handleSearch(search);
    },
    400,
    [search]
  );

  const quickstarts = data.allQuickstarts.nodes;

  const alphaSort = quickstarts.sort((a, b) => a.title.localeCompare(b.title));
  const sortedQuickstarts = sortFeaturedQuickstarts(alphaSort);

  const filteredQuickstarts = sortedQuickstarts
    .filter(filterBySearch(search))
    .filter(filterByContentType(filter))
    .filter(filterByCategory(category));

  const categoriesWithCount = CATEGORIES.map((cat) => ({
    ...cat,
    count: quickstarts
      .filter(filterBySearch(search))
      .filter(filterByCategory(cat.value)).length,
  }));

  const filtersWithCount = FILTERS.map((filter) => ({
    ...filter,
    count: quickstarts
      .filter(filterBySearch(search))
      .filter(filterByContentType(filter.type))
      .filter(filterByCategory(category)).length,
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
            border-right: ${isMobile
              ? 'none'
              : '1px solid var(--divider-color)'};
            height: calc(100vh - var(--global-header-height));
            position: sticky;
            top: var(--global-header-height);

            @media screen and (max-width: 760px) {
              display: block;
              position: relative;
              overflow: hidden;
              width: 100%;
              height: 100%;
            }
          `}
        >
          {isMobile && <IOBanner isMobile />}
          <div>{isMobile && <BetaBanner />}</div>
          <div
            css={css`
              padding: var(--site-content-padding);
              height: 100%;
              overflow: auto;
              @media screen and (max-width: 760px) {
                position: relative;
              }
            `}
          >
            <Link
              css={css`
                display: block;
                margin-bottom: 1rem;
              `}
              to="/instant-observability"
            >
              <IOLogo
                css={css`
                  width: 100%;
                `}
              />
            </Link>
            <p>
              A place to find quickstarts of resources like dashboards,
              instrumentation, and alerts to help you monitor your environment.
            </p>
            <aside
              data-swiftype-index={false}
              css={css`
                border-bottom: 1px solid var(--divider-color);
                margin-bottom: 1.5rem;
              `}
            />
            <div
              css={css`
                margin-bottom: 1rem;
              `}
            >
              <FormControl>
                <Label htmlFor="quickstartCategory">CATEGORIES</Label>
                {isMobile ? (
                  <Select
                    id="quickstartCategory"
                    value={category}
                    onChange={(e) => {
                      const type = e.target.value;
                      handleCategory(type);
                    }}
                  >
                    {categoriesWithCount.map(
                      ({ displayName, value, count }) => (
                        <option key={value} value={value}>
                          {`${displayName} (${count})`}
                        </option>
                      )
                    )}
                  </Select>
                ) : (
                  categoriesWithCount.map(({ displayName, value, count }) => (
                    <Button
                      type="button"
                      key={value}
                      onClick={() => handleCategory(value)}
                      css={css`
                        padding: 1rem 0.5rem;
                        width: 100%;
                        display: flex;
                        justify-content: flex-start;
                        color: var(--primary-text-color);
                        font-weight: 100;
                        background: ${category === value
                          ? 'var(--divider-color)'
                          : 'none'};
                      `}
                    >
                      {`${displayName} (${count})`}
                    </Button>
                  ))
                )}
              </FormControl>
            </div>
            <FormControl>
              <Label htmlFor="quickstartFilterByType">FILTER BY</Label>
              {isMobile ? (
                <Select
                  id="quickstartFilterByType"
                  value={filter}
                  onChange={(e) => {
                    const type = e.target.value;
                    handleFilter(type);
                  }}
                >
                  {filtersWithCount.map(({ name, count, type }) => (
                    <option key={type} value={type}>
                      {`${name} (${count})`}
                    </option>
                  ))}
                </Select>
              ) : (
                filtersWithCount.map(({ name, type, icon, count }) => (
                  <Button
                    type="button"
                    key={name}
                    onClick={() => handleFilter(type)}
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
          {!isMobile && <IOBanner />}
          <div>{!isMobile && <BetaBanner />}</div>
          <div
            css={css`
              background-color: var(--secondary-background-color);
              border-radius: 4px;
              padding: 1rem;
              display: flex;
              justify-content: space-between;
              align-items: center;

              input {
                font-size: 1.15em;
                padding: 0.5rem;
                padding-left: 3.75rem;
                border-radius: 4px;

                &::placeholder {
                  color: var(--border-color);
                }
              }

              .dark-mode & {
                background-color: var(--tertiary-background-color);
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
            <SearchInput
              size={SearchInput.SIZE.LARGE}
              value={search || ''}
              placeholder="Search for any quickstart (e.g. Node, AWS, LAMP, etc.)"
              onClear={() => setSearch('')}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div
              css={css`
                min-width: 155px;
                margin-left: 20px;

                @media screen and (max-width: 1180px) {
                  margin-left: 0px;
                }
              `}
            >
              <SegmentedControl
                items={Object.values(VIEWS)}
                onChange={(_e, view) => {
                  setView(view);

                  tessen.track('instantObservability', `QuickstartViewToggle`, {
                    quickstartViewState: view,
                  });
                }}
              />
            </div>
          </div>
          <div
            css={css`
              padding: 1.25rem 0;
              font-size: 0.9rem;
              color: var(--secondary-text-color);
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
            {filter && filter === 'documentation' ? (
              // if data source filter is selected, display guided install
              <ExternalLink
                href="https://one.newrelic.com/launcher/catalog-pack-details.launcher/?pane=eyJuZXJkbGV0SWQiOiJjYXRhbG9nLXBhY2stZGV0YWlscy5jYXRhbG9nLXBhY2stY29udGVudHMifQ==&cards[0]=eyJuZXJkbGV0SWQiOiJucjEtaW5zdGFsbC1uZXdyZWxpYy5ucjEtaW5zdGFsbC1uZXdyZWxpYyJ9"
                css={css`
                  text-decoration: none;
                `}
              >
                <PackTile
                  id={RESERVED_QUICKSTART_IDS.GUIDED_INSTALL}
                  css={css`
                    ${view === VIEWS.GRID && `height: 100%;`}
                    background-color: var(--tertiary-background-color);
                  `}
                  view={view}
                  logoUrl={GUIDED_INSTALL}
                  title="Guided Install"
                  summary="Not sure how to get started? We'll walk you through the process of instrumenting your environment so that you can monitor it."
                />
              </ExternalLink>
            ) : (
              // else, display build your own quickstart
              <ExternalLink
                href={QUICKSTARTS_REPO}
                css={css`
                  text-decoration: none;
                `}
              >
                <PackTile
                  id={RESERVED_QUICKSTART_IDS.BUILD_YOUR_OWN_QUICKSTART}
                  css={css`
                    ${view === VIEWS.GRID && `height: 100%;`}
                    background-color: var(--tertiary-background-color);
                  `}
                  view={view}
                  logoUrl={BUILD_YOUR_OWN}
                  title="Build your own quickstart"
                  summary="Can't find a quickstart with what you need? Check out our README and build your own."
                />
              </ExternalLink>
            )}
            {filteredQuickstarts.map((pack) => (
              <PackTile
                key={pack.id}
                view={view}
                featured={pack.keywords?.includes('featured')}
                {...pack}
              />
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
        title
        name
        websiteUrl
        logoUrl
        packUrl
        level
        keywords
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
        summary
        installPlans {
          id
          name
        }
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
