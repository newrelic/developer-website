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
import { useDebounce } from 'react-use';

const { QUICKSTARTS_REPO } = require('../data/constants');

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
 * Filters a quickstart based on a provided search term.
 * @param {String} search Search term.
 * @returns {(Object) => Boolean} Callback function to be used by filter.
 */
const filterBySearch = (search) => ({ name, description }) => {
  return (
    !search ||
    name.toLowerCase().includes(search.toLowerCase()) ||
    description.toLowerCase().includes(search.toLowerCase())
  );
};

/**
 * Filters a quickstart based on a content type.
 * @param {String} type The content type (e.g. 'alerts').
 * @returns {(Object) => Boolean} Callback function to be used by filter.
 */
const filterByContentType = (type) => (quickstart) => {
  return !type || (quickstart[type] && quickstart[type].length > 0);
};

const QuickstartsPage = ({ data, location }) => {
  const [view, setView] = useState(VIEWS.GRID);
  const isMobile = useMobileDetect().isMobile();
  const tessen = useTessen();

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam = params.get('search');
    const filterParam = params.get('filter');
    setSearch(searchParam);
    setFilter(filterParam);

    if (searchParam || filterParam) {
      tessen.track('InstantObservability', 'QuickstartsCatalog', {
        filter: filterParam,
        search: searchParam,
      });
    }
  }, [location.search]);

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

  useDebounce(
    () => {
      handleSearch(search);
    },
    400,
    [search]
  );

  const quickstarts = data.allQuickstarts.nodes;

  const filteredQuickstarts = quickstarts
    .filter(filterBySearch(search))
    .filter(filterByContentType(filter));

  const filtersWithCount = FILTERS.map((filter) => ({
    ...filter,
    count: quickstarts
      .filter(filterBySearch(search))
      .filter(filterByContentType(filter.type)).length,
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
              width: 100%;
              height: 100%;
            }
          `}
        >
          {isMobile && <IOBanner isMobile />}

          <div
            css={css`
              padding: var(--site-content-padding);
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
              `}
            >
              <SegmentedControl
                items={Object.values(VIEWS)}
                onChange={(_e, view) => {
                  setView(view);

                  tessen.track('InstantObservability', `QuickstartViewToggle`, {
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
                summary="Can't find a pack with what you need? Check out our README and build your own."
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
        summary
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
