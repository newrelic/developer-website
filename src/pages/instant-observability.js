import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import React, { useState, useEffect } from 'react';
import DevSiteSeo from '../components/DevSiteSeo';
import { css } from '@emotion/react';
import SegmentedControl from '../components/SegmentedControl';
import Overlay from '../components/Overlay';
import PackTile from '../components/PackTile';
import IOBanner from '../components/IOBanner';
import {
  SearchInput,
  useTessen,
  Button,
} from '@newrelic/gatsby-theme-newrelic';
import { navigate } from '@reach/router';

import BUILD_YOUR_OWN from '../images/build-your-own.svg';
import { useDebounce } from 'react-use';
import { sortFeaturedQuickstarts } from '../utils/sortFeaturedQuickstarts';
import {
  QUICKSTARTS_REPO,
  RESERVED_QUICKSTART_IDS,
  QUICKSTARTS_COLLAPSE_BREAKPOINT,
  LISTVIEW_BREAKPOINT,
} from '../data/constants';
import CATEGORIES from '../data/instant-observability-categories';

import SuperTiles from '../components/SuperTiles';

const VIEWS = {
  GRID: 'Grid view',
  LIST: 'List view',
};

const DOUBLE_COLUMN_BREAKPOINT = '1180px';
const TRIPLE_COLUMN_BREAKPOINT = '1350px';
const SINGLE_COLUMN_BREAKPOINT = LISTVIEW_BREAKPOINT;

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
  const tessen = useTessen();

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const [isCategoriesOverlayOpen, setIsCategoriesOverlayOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam = params.get('search');
    const categoryParam = params.get('category');

    setSearch(searchParam);
    setCategory(categoryParam || '');
    if (searchParam || categoryParam) {
      tessen.track({
        eventName: 'instantObservability',
        category: 'QuickstartCatalogSearch',
        search: searchParam,
        quickstartCategory: categoryParam,
      });
    }
  }, [location.search, tessen]);

  const closeCategoriesOverlay = () => {
    setIsCategoriesOverlayOpen(false);
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

    closeCategoriesOverlay();
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
  let sortedQuickstarts = sortFeaturedQuickstarts(alphaSort);

  // Hard-code for moving codestream object to front of sortedQuickstarts array - CM
  if ((!category && !search) || (category === 'featured' && !search)) {
    // uuid is codestream id specifically - CM
    const codestreamIndex = sortedQuickstarts.findIndex(
      ({ id }) => id === '29bd9a4a-1c19-4219-9694-0942f6411ce7'
    );

    if (codestreamIndex > -1) {
      const codestreamObject = sortedQuickstarts[codestreamIndex];
      sortedQuickstarts = [
        codestreamObject,
        ...sortedQuickstarts.slice(0, codestreamIndex),
        ...sortedQuickstarts.slice(codestreamIndex + 1),
      ];
    }
  }

  const filteredQuickstarts = sortedQuickstarts
    .filter(filterBySearch(search))
    .filter(filterByCategory(category));

  const categoriesWithCount = CATEGORIES.map((cat) => ({
    ...cat,
    count: quickstarts
      .filter(filterBySearch(search))
      .filter(filterByCategory(cat.value)).length,
  }));

  /**
   * Finds display name for selected category.
   * @returns {String} Display name for results found.
   */
  const getDisplayName = (defaultName = 'All quickstarts') => {
    const found = CATEGORIES.find((cat) => cat.value === category);

    if (!found.value) return defaultName;

    return found.displayName;
  };

  return (
    <>
      <DevSiteSeo
        title="Instant Observability"
        location={location}
        type="quickstarts"
      />
      <IOBanner />
      <div
        css={css`
          --sidebar-width: 300px;
          --banner-height: 308px;
          display: grid;
          grid-template-columns: var(--sidebar-width) minmax(0, 1fr);
          grid-template-areas: 'sidebar main';
          grid-template-rows: 1fr auto;
          grid-gap: 70px;
          min-height: calc(100vh - var(--global-header-height));
          margin: var(--banner-height) auto;
          max-width: var(--site-max-width);

          @media screen and (max-width: ${QUICKSTARTS_COLLAPSE_BREAKPOINT}) {
            grid-gap: 0;
            grid-template-columns: minmax(0, 1fr);
            grid-template-areas: 'main';
            grid-template-rows: unset;
          }
        `}
      >
        <aside
          data-swiftype-index={false}
          css={css`
            grid-area: sidebar;
            height: calc(100vh - var(--global-header-height));
            position: sticky;
            top: var(--global-header-height);

            @media screen and (max-width: ${QUICKSTARTS_COLLAPSE_BREAKPOINT}) {
              display: none;
              position: relative;
              overflow: hidden;
              width: 100%;
              height: 100%;
            }
          `}
        >
          <div
            css={css`
              padding: var(--site-content-padding);
              height: 100%;
              overflow: auto;
              @media screen and (max-width: ${QUICKSTARTS_COLLAPSE_BREAKPOINT}) {
                position: relative;
              }
            `}
          >
            <FormControl>
              <Label htmlFor="quickstartCategory">Categories</Label>
              {categoriesWithCount.map(({ displayName, value, count }) => (
                <Button
                  type="button"
                  key={value}
                  disabled={count === 0}
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
                  {`${displayName}`}
                  <span
                    css={css`
                      color: var(--secondary-text-color);
                      padding-left: 0.25rem;
                    `}
                  >{`(${count})`}</span>
                </Button>
              ))}
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
              @media screen and (max-width: ${QUICKSTARTS_COLLAPSE_BREAKPOINT}) {
                display: none;
              }
            `}
          >
            <SuperTiles />
          </div>
          <div
            css={css`
              align-items: center;
              background-color: var(--secondary-background-color);
              border-radius: 4px;
              display: flex;
              justify-content: space-between;
              padding: 0.5rem;

              input {
                font-size: 1.15em;
                padding: 0.5rem;
                padding-left: 2.25rem;
                background: var(--color-white);
                border: 1px solid var(--color-neutrals-600);
                border-radius: 4px;

                &::placeholder {
                  color: var(--color-neutrals-600);
                  padding-left: 0.5rem;
                }
              }

              .dark-mode & {
                background-color: var(--tertiary-background-color);
                input {
                  background: var(--color-dark-400);

                  &::placeholder {
                    color: var(primary-text-color);
                  }
                }
              }
              @media (max-width: ${QUICKSTARTS_COLLAPSE_BREAKPOINT}) {
                background-color: var(--primary-background-color);
                padding: 0;
              }
            `}
          >
            <SearchInput
              size={SearchInput.SIZE.LARGE}
              value={search || ''}
              placeholder="What do you want to monitor? (e.g., AWS, LAMP, Kubernetes)"
              onClear={() => setSearch('')}
              onChange={(e) => setSearch(e.target.value)}
              css={css`
                --svg-color: var(--color-neutrals-700);
                box-shadow: none;
                max-width: 630px;
                svg {
                  width: 16px;
                  height: 16px;
                  color: var(--svg-color);
                }

                .dark-mode & {
                  --svg-color: var(--primary-text-color);
                }

                @media screen and (max-width: ${QUICKSTARTS_COLLAPSE_BREAKPOINT}) {
                  font-size: 11px;
                  max-width: 100%;
                }
              `}
            />
            <SegmentedControl
              items={Object.values(VIEWS)}
              onChange={(_e, view) => {
                setView(view);

                tessen.track({
                  eventName: 'instantObservability',
                  category: 'QuickstartViewToggle',
                  quickstartViewState: view,
                });
              }}
              css={css`
                @media screen and (max-width: ${LISTVIEW_BREAKPOINT}) {
                  display: none;
                }
              `}
            />
          </div>
          <div
            css={css`
              display: flex;
              @media screen and (min-width: ${QUICKSTARTS_COLLAPSE_BREAKPOINT}) {
                display: none;
              }
            `}
          >
            <Button
              css={css`
                border-radius: 2px;
                border: 1px solid var(--border-color);
                color: var(--primary-text-color);
                font-size: 12px;
                justify-content: flex-start;
                margin: 40px 0;
              `}
              variant={Button.VARIANT.LINK}
              onClick={() => setIsCategoriesOverlayOpen(true)}
            >
              {getDisplayName('Filter by Category')}
            </Button>
            <Overlay
              isOpen={isCategoriesOverlayOpen}
              onCloseOverlay={closeCategoriesOverlay}
            >
              <div
                css={css`
                  border-radius: 5px;
                  position: relative;
                  width: 100%;
                  margin: 30% auto 0;
                  padding: 1rem;
                  background: var(--primary-background-color);
                `}
              >
                <h3
                  css={css`
                    padding: 0.5rem 0 0 0.5rem;
                  `}
                >
                  Category
                </h3>
                <div
                  css={css`
                    max-height: 400px;
                    padding-bottom: 3rem;
                    overflow-y: scroll;
                  `}
                >
                  {categoriesWithCount.map(({ displayName, value, count }) => (
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
                  ))}
                </div>
                <div
                  css={css`
                    background: var(--secondary-background-color);
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 4rem;
                    border-bottom-right-radius: 5px;
                    border-bottom-left-radius: 5px;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                  `}
                >
                  <Button
                    css={css`
                      height: 2rem;
                      margin-right: 1rem;
                    `}
                    onClick={closeCategoriesOverlay}
                    variant={Button.VARIANT.PRIMARY}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </Overlay>
          </div>
          <div
            css={css`
              --text-color: var(--primary-text-color);

              padding: 1.25rem 0;
              font-size: 16px;
              color: var(--color-neutrals-800);
              display: flex;
              justify-content: space-between;
              align-text: center;

              span {
                color: var(--text-color);

                /* target inner children of parent span */
                span,
                strong {
                  @media screen and (max-width: ${QUICKSTARTS_COLLAPSE_BREAKPOINT}) {
                    display: none;
                  }
                }
              }

              strong {
                color: var(--text-color);
              }

              @media screen and (max-width: ${QUICKSTARTS_COLLAPSE_BREAKPOINT}) {
                padding: 0 0 0.5rem;
              }
            `}
          >
            <span>
              Showing {filteredQuickstarts.length} results
              <span> for: </span>
              <strong>{search || getDisplayName()}</strong>
            </span>
          </div>
          <div
            css={css`
              display: grid;
              grid-gap: 1.25rem;
              grid-template-columns: repeat(4, 1fr);
              grid-auto-rows: 1fr;
              ${view === VIEWS.GRID &&
              css`
                @media (max-width: ${TRIPLE_COLUMN_BREAKPOINT}) {
                  grid-template-columns: repeat(3, 1fr);
                }

                @media (max-width: ${DOUBLE_COLUMN_BREAKPOINT}) {
                  grid-template-columns: repeat(2, 1fr);
                }

                @media (max-width: ${SINGLE_COLUMN_BREAKPOINT}) {
                  grid-template-columns: repeat(1, 1fr);
                }
              `}
              ${view === VIEWS.LIST &&
              css`
                grid-auto-rows: 1fr;
                grid-template-columns: 1fr;
                grid-gap: 1.25rem;
              `};
            `}
          >
            <PackTile
              id={RESERVED_QUICKSTART_IDS.BUILD_YOUR_OWN_QUICKSTART}
              css={css`
                background-color: var(--tertiary-background-color);
              `}
              href={QUICKSTARTS_REPO}
              view={view}
              logoUrl={BUILD_YOUR_OWN}
              title="Build your own quickstart"
              summary="Can't find a quickstart with what you need? Check out our README and build your own."
            />
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
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--primary-text-color);
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
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    `}
  >
    {children}
  </div>
);

FormControl.propTypes = {
  children: PropTypes.node,
};

export default QuickstartsPage;
