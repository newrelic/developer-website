import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import React, { useState, useEffect, useRef } from 'react';
import useMobileDetect from 'use-mobile-detect-hook';
import DevSiteSeo from '../components/DevSiteSeo';
import { css } from '@emotion/react';
import SegmentedControl from '../components/SegmentedControl';
import PackTile from '../components/PackTile';
import IOBanner from '../components/IOBanner';
import MobileQSFilter from '../components/MobileQSFilter';
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

const packContentsFilterGroups = [
  'All',
  'Dashboards',
  'Alerts',
  'Data sources',
];

const VIEWS = {
  GRID: 'Grid view',
  LIST: 'List view',
};

const QuickstartsPage = ({ data, location }) => {
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
          {isMobile && <IOBanner />}

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
              data-swiftype-index={false}
              css={css`
                border-bottom: 1px solid var(--divider-color);
                margin-bottom: 1.5rem;
              `}
            />
            <FormControl>
              <Label htmlFor="packContentsFilter">FILTER BY</Label>
              {isMobile ? (
                <MobileQSFilter
                  setFormState={setFormState}
                  packContains={formState.packContains}
                  packContentsFilterValues={packContentsFilterValues}
                />
              ) : (
                packContentsFilterValues.map(
                  ({ filterName, filterCount }, i) => (
                    <Button
                      css={css`
                        padding: 1rem 0;
                        width: 100%;
                        display: flex;
                        justify-content: flex-start;
                        color: var(--primary-text-color);
                        font-weight: 100;
                        background: ${formState.packContains === filterName
                          ? 'var(--divider-color)'
                          : 'none'};
                      `}
                      type="button"
                      key={i}
                      onClick={() => setFormState({ packContains: filterName })}
                    >
                      {filterName === 'Dashboards' && (
                        <Icon
                          name="nr-dashboard"
                          css={css`
                            fill: currentColor;
                            stroke-width: 0.25;
                            margin: 0 0.5rem;
                          `}
                        />
                      )}
                      {filterName === 'Alerts' && (
                        <Icon
                          name="nr-alert"
                          css={css`
                            fill: currentColor;
                            stroke-width: 0.25;
                            margin: 0 0.5rem;
                          `}
                        />
                      )}
                      {filterName === 'Data sources' && (
                        <Icon
                          name="nr-document"
                          css={css`
                            fill: currentColor;
                            stroke-width: 0.25;
                            margin: 0 0.5rem;
                          `}
                        />
                      )}
                      {!filterName ||
                        (filterName === 'All' && (
                          <Icon
                            name="nr-all-entities"
                            css={css`
                              fill: currentColor;
                              stroke-width: 1;
                              margin: 0 0.5rem;
                            `}
                          />
                        ))}
                      {`${filterName} (${filterCount})`}
                    </Button>
                  )
                )
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
                  ref={searchInputRef}
                  size={SearchInput.SIZE.LARGE}
                  value={formState.search || ''}
                  placeholder="Search pack names / descriptions. Enter to search"
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
