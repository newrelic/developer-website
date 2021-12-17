import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import useMobileDetect from 'use-mobile-detect-hook';
import DevSiteSeo from '../DevSiteSeo';
import { css } from '@emotion/react';
import Overlay from '../Overlay';
import PackTile from '../PackTile';
import QuickstartError from './QuickstartError';
import QuickstartSort from './QuickstartSort';
import {
  SearchInput,
  useTessen,
  Button,
} from '@newrelic/gatsby-theme-newrelic';
import { navigate } from 'gatsby';

import BUILD_YOUR_OWN from '../../images/build-your-own.svg';
import { rawQuickstart } from '../../types';
import { useDebounce } from 'react-use';
import SuperTilesExperiment from '../../experiments/super_tiles';
import QuickstartsSidebar from './QuickstartsSidebar';

import {
  QUICKSTARTS_REPO,
  RESERVED_QUICKSTART_IDS,
} from '../../data/constants';

const QuickstartsPage = ({ location, serverData, errored }) => {
  const allCategoriesWithTerms = serverData?.facetsQuery?.categories ?? [];
  const allCategoriesWithCount =
    serverData?.facetsQuery?.search?.facets?.categories ?? [];
  let quickstarts = serverData?.quickstartsQuery?.search?.results ?? [];
  const facets = serverData?.quickstartsQuery?.search?.facets ?? {};
  const totalCount = serverData?.facetsQuery?.search?.totalCount;

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

  const handleCategory = (terms) => {
    if (terms !== null && terms !== undefined) {
      const params = new URLSearchParams(location.search);
      params.set('category', terms);

      navigate(`?${params.toString()}`);
    }
  };

  const getCategories = () => {
    const categoriesWithCount =
      search !== '' ? facets.categories || [] : allCategoriesWithCount;

    const categoryCountDictionary = categoriesWithCount.reduce(
      (acc, category) => {
        acc = { ...acc, [category.displayName]: category.count };
        return acc;
      },
      {}
    );

    const categories = allCategoriesWithTerms.map((category) => {
      return {
        ...category,
        count: categoryCountDictionary[category.displayName] || 0,
      };
    });
    categories.unshift({
      displayName: 'All',
      count: totalCount,
      terms: [''],
    });
    return categories;
  };

  useDebounce(
    () => {
      handleSearch(search);
    },
    400,
    [search]
  );

  // Hard-code for moving codestream object to front of sortedQuickstarts array - CM
  if ((!category && !search) || (category === 'featured' && !search)) {
    // uuid is codestream id specifically - CM
    const codestreamIndex = quickstarts?.findIndex(
      ({ id }) => id === '29bd9a4a-1c19-4219-9694-0942f6411ce7'
    );

    if (codestreamIndex > -1) {
      const codestreamObject = quickstarts[codestreamIndex];
      quickstarts = [
        codestreamObject,
        ...quickstarts?.slice(0, codestreamIndex),
        ...quickstarts?.slice(codestreamIndex + 1),
      ];
    }
  }
  const categoriesWithCount = getCategories();
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
        <QuickstartsSidebar
          isMobile={isMobile}
          categoriesWithCount={categoriesWithCount}
          category={category}
          handleCategory={handleCategory}
        />
        <div
          css={css`
            grid-area: main;
            padding: var(--site-content-padding);
          `}
        >
          {!isMobile && <SuperTilesExperiment />}
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
                        ({ displayName, slug, terms, count }) => (
                          <Button
                            type="button"
                            key={slug}
                            disabled={count === 0}
                            onClick={() => handleCategory(terms)}
                            css={css`
                              padding: 1rem 0.5rem;
                              width: 100%;
                              display: flex;
                              justify-content: flex-start;
                              color: var(--primary-text-color);
                              font-weight: 100;
                              background: ${category === terms.toString()
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
              display: flex;
              flex-direction: column;
              margin-top: 1rem;
            `}
          >
            {isMobile && (
              <QuickstartSort
                location={location}
                css={css`
                  padding-top: 1rem;
                  padding-bottom: 1rem;
                `}
              />
            )}
            <div
              css={css`
                padding: 1.25rem 0;
                font-size: 0.9rem;
                color: var(--secondary-text-color);
                display: flex;
                justify-content: space-between;
              `}
            >
              <span>{`Showing ${quickstarts?.length} result${
                quickstarts?.length === 1 ? '' : 's'
              }`}</span>

              <div
                css={css`
                  min-width: 155px;
                  margin-left: 20px;
                  display: flex;
                  align-items: center;

                  @media screen and (max-width: 1180px) {
                    margin-left: 0px;
                  }
                `}
              >
                {!isMobile && (
                  <QuickstartSort
                    location={location}
                    css={css`
                      width: fit-content;
                    `}
                  />
                )}
              </div>
            </div>
          </div>
          {errored ? (
            <QuickstartError />
          ) : (
            <div
              css={css`
                display: grid;
                grid-gap: 1rem;
                grid-template-columns: repeat(4, 1fr);
                grid-auto-rows: minmax(
                  var(--guide-list-row-height, 150px),
                  auto
                );

                @media (max-width: 1450px) {
                  grid-template-columns: repeat(3, 1fr);
                }

                @media (max-width: 1180px) {
                  grid-template-columns: repeat(1, 1fr);
                }
              `}
            >
              <PackTile
                id={RESERVED_QUICKSTART_IDS.BUILD_YOUR_OWN_QUICKSTART}
                css={css`
                  background-color: var(--tertiary-background-color);
                `}
                href={QUICKSTARTS_REPO}
                metadata={{
                  displayName: 'Build your own quickstart',
                  icon: { url: BUILD_YOUR_OWN },
                  summary:
                    "Can't find a quickstart with what you need? Check out our README and build your own.",
                }}
              />

              {quickstarts?.map((quickstart) => (
                <PackTile
                  key={quickstart.id}
                  featured={quickstart.featured}
                  {...quickstart}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

QuickstartsPage.propTypes = {
  serverData: PropTypes.shape({
    quickstartsQuery: PropTypes.shape({
      search: PropTypes.shape({
        facets: PropTypes.shape({
          categories: PropTypes.shape({
            count: PropTypes.string,
            displayName: PropTypes.string,
          }),
        }),
        results: PropTypes.arrayOf(rawQuickstart),
        categories: PropTypes.arrayOf(
          PropTypes.shape({
            displayName: PropTypes.string,
            terms: PropTypes.array,
          })
        ),
      }),
    }),
    facetsQuery: PropTypes.shape({
      categories: PropTypes.shape({
        displayName: PropTypes.string,
        terms: PropTypes.array,
      }),
      search: PropTypes.shape({
        totalCount: PropTypes.string,
        facets: PropTypes.shape({
          categories: PropTypes.shape({
            count: PropTypes.string,
            displayName: PropTypes.string,
          }),
        }),
      }),
    }),
  }),
  location: PropTypes.object,
  errored: PropTypes.bool,
};

export default QuickstartsPage;
