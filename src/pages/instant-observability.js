import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import React, { useState, useEffect } from 'react';
import useMobileDetect from 'use-mobile-detect-hook';
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
import { QUICKSTARTS_REPO, RESERVED_QUICKSTART_IDS } from '../data/constants';
import CATEGORIES from '../data/instant-observability-categories';

import SuperTiles from '../components/SuperTiles';

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
          min-height: calc(100vh - var(--global-header-height));
          margin: var(--banner-height) auto;
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
            {!isMobile && (
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
            )}
          </div>
        </aside>
        <div
          css={css`
            grid-area: main;
            padding: var(--site-content-padding);
          `}
        >
          <SuperTiles />
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
            {isMobile && (
              <div
                css={css`
                  display: flex;
                `}
              >
                <Button
                  css={css`
                    justify-content: flex-start;
                    padding: 0;
                    margin: 0.5rem 1rem 0 0;
                  `}
                  variant={Button.VARIANT.LINK}
                  onClick={() => setIsCategoriesOverlayOpen(true)}
                >
                  Categories
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
                      {categoriesWithCount.map(
                        ({ displayName, value, count }) => (
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
                        )
                      )}
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
                        OK
                      </Button>
                    </div>
                  </div>
                </Overlay>
              </div>
            )}
          </div>

          <div
            css={css`
              padding: 1.25rem 0;
              font-size: 0.9rem;
              color: var(--secondary-text-color);
              display: flex;
              justify-content: space-between;
            `}
          >
            <span>Showing {filteredQuickstarts.length} results</span>

            <div
              css={css`
                min-width: 155px;
                margin-left: 20px;
                display: inline;

                @media screen and (max-width: 1180px) {
                  margin-left: 0px;
                }
              `}
            >
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
            <PackTile
              id={RESERVED_QUICKSTART_IDS.BUILD_YOUR_OWN_QUICKSTART}
              css={css`
                ${view === VIEWS.GRID && `height: 100%;`}
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
