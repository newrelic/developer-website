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
  useTessen,
  ExternalLink,
} from '@newrelic/gatsby-theme-newrelic';

import { useDebounce } from 'react-use';
import { useQueryParams, StringParam } from 'use-query-params';
import BUILD_YOUR_OWN from '../images/build-your-own.svg';

const { QUICKSTARTS_REPO } = require('../data/constants');

const VIEWS = {
  GRID: 'Grid view',
  LIST: 'List view',
};

const prop = (key) => (obj) => obj[key];
const withComponent = (packs, key) => packs.filter((p) => p[key].length > 0);

const QuickstartsPage = ({ data, location }) => {
  const tessen = useTessen();

  const {
    allQuickstarts: { nodes: quickstarts },
  } = data;

  const [view, setView] = useState(VIEWS.GRID);
  useEffect(() => {
    setView(view);
  }, [view]);

  const [queryParams, setQueryParams] = useQueryParams({
    search: StringParam,
    filter: StringParam,
  });
  const [formState, setFormState] = useState({
    search: '',
    filter: '',
  });

  // This is purely to prevent sending incomplete search events
  // to tessen
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
    [formState]
  );

  // Reads any existing query parameters into the form state
  useEffect(() => {
    const qpSearch = queryParams.search || '';
    const qpFilter = queryParams.filter || '';

    setFormState({ search: qpSearch, filter: qpFilter });
  }, []);

  // Updates the url based on the current form state
  useEffect(() => {
    setQueryParams(formState, 'replace');
  }, [formState]);

  let filteredPacks = quickstarts.filter(
    (qs) =>
      qs.name.toLowerCase().includes(formState.search.toLowerCase()) ||
      qs.description.toLowerCase().includes(formState.search.toLowerCase())
  );

  // This array is used to populate filters with a name, value,
  // and count of packs within each filter
  const packContentsFilterValues = [
    {
      filterName: 'All',
      filterValue: 'all',
      filterCount: filteredPacks.length,
    },
    {
      filterName: 'Dashboards',
      filterValue: 'dashboards',
      filterCount: withComponent(filteredPacks, 'dashboards').length,
    },
    {
      filterName: 'Alerts',
      filterValue: 'alerts',
      filterCount: withComponent(filteredPacks, 'alerts').length,
    },
    {
      filterName: 'Data sources',
      filterValue: 'documentation',
      filterCount: withComponent(filteredPacks, 'documentation').length,
    },
  ];

  if (
    formState.filter !== 'all' &&
    packContentsFilterValues.map(prop('filterValue')).includes(formState.filter)
  ) {
    filteredPacks = withComponent(filteredPacks, formState.filter);
  }

  return (
    <>
      <DevSiteSeo title="Instant Observability" location={location} />
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
            <FormControl>
              <Label htmlFor="packContentsFilter">
                Filter packs containing
              </Label>
              <Select
                id="packContentsFilter"
                value={formState.filter}
                onChange={(e) => {
                  setFormState({ ...formState, filter: e.target.value });

                  document.getElementById(e.target.id).blur();
                  tessen.track('observabilityPack', `packFilter`, {
                    packFilterState: formState.filter,
                  });
                }}
              >
                {packContentsFilterValues.map((packContentsItem) => (
                  <option
                    key={packContentsItem.filterName}
                    value={packContentsItem.filterValue}
                  >
                    {`${packContentsItem.filterName} (${packContentsItem.filterCount})`}
                  </option>
                ))}
              </Select>
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
                  input {
                    background: inherit;
                  }
                `}
              >
                <SearchInput
                  size={SearchInput.SIZE.LARGE}
                  value={formState.search}
                  placeholder="Search pack names / descriptions. Enter to search"
                  onClear={() => {
                    setFormState({ ...formState, search: '' });
                  }}
                  onChange={(e) => {
                    setFormState({ ...formState, search: e.target.value });
                  }}
                />
              </div>
              <div
                css={css`
                  display: inline-block;
                  min-width: 155px;
                  margin-left: 1rem;
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
            <span>Showing {filteredPacks.length} results</span>
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
            {filteredPacks.map((pack) => (
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
          name
        }
        alerts {
          name
        }
        documentation {
          name
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

export default QuickstartsPage;
