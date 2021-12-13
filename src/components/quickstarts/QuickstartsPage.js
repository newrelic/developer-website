import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import useMobileDetect from 'use-mobile-detect-hook';
import DevSiteSeo from '../DevSiteSeo';
import { css } from '@emotion/react';
import SegmentedControl from '../SegmentedControl';
import Overlay from '../Overlay';
import PackTile from '../PackTile';
import QuickstartFilter from './QuickstartFilter';
import QuickstartError from './QuickstartError';
import QuickstartSort from './QuickstartSort';
import {
  SearchInput,
  useTessen,
  Button,
  Icon,
} from '@newrelic/gatsby-theme-newrelic';
import { navigate } from '@reach/router';

import BUILD_YOUR_OWN from '../../images/build-your-own.svg';
import GUIDED_INSTALL from '../../images/guided-install.svg';
import { useDebounce } from 'react-use';
import SuperTilesExperiment from '../../experiments/super_tiles';
import QuickstartsSidebar from './QuickstartsSidebar';

import {
  QUICKSTARTS_REPO,
  RESERVED_QUICKSTART_IDS,
  NR1_GUIDED_INSTALL_NERDLET,
} from '../../data/constants';
import CATEGORIES from '../../data/instant-observability-categories';

import { getGuidedInstallStackedNr1Url } from '../../utils/get-pack-nr1-url';

const FILTERS = [
  { name: 'Dashboards', type: 'dashboards', icon: 'nr-dashboard' },
  { name: 'Alerts', type: 'alerts', icon: 'nr-alert' },
  { name: 'Data sources', type: 'documentation', icon: 'nr-document' },
];

const VIEWS = {
  GRID: 'Grid view',
  LIST: 'List view',
};

const QuickstartsPage = ({ location, quickstarts, errored }) => {
  const [view, setView] = useState(VIEWS.GRID);
  const isMobile = useMobileDetect().isMobile();
  const tessen = useTessen();

  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState([]);
  const [category, setCategory] = useState('');

  const [isFilterOverlayOpen, setIsFilterOverlayOpen] = useState(false);
  const [isCategoriesOverlayOpen, setIsCategoriesOverlayOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam = params.get('search');
    const filterParam = params.get('filter');
    const categoryParam = params.get('category');

    setSearch(searchParam);
    setFilters(
      !filterParam || filterParam === '' ? [] : filterParam.split(',')
    );
    setCategory(categoryParam || '');
    if (searchParam || filterParam || categoryParam) {
      tessen.track({
        eventName: 'instantObservability',
        category: 'QuickstartCatalogSearch',
        filter: filterParam,
        search: searchParam,
        quickstartCategory: categoryParam,
      });
    }
  }, [location.search, tessen]);

  const closeFilterOverlay = () => {
    setIsFilterOverlayOpen(false);
  };

  const closeCategoriesOverlay = () => {
    setIsCategoriesOverlayOpen(false);
  };

  const handleFilter = (value, e) => {
    const currentFilters = filters.slice();
    const params = new URLSearchParams(location.search);

    if (e.target.checked) {
      currentFilters.push(value);
      setFilters(currentFilters);
      params.set('filter', currentFilters);
    } else {
      const filteredFilters = currentFilters.filter(
        (filter) => filter !== value
      );
      setFilters(filteredFilters);
      params.set('filter', filteredFilters);
    }
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

  const clearFilters = () => {
    setFilters([]);
    const params = new URLSearchParams(location.search);
    params.set('filter', []);

    navigate(`?${params.toString()}`);
  };

  useDebounce(
    () => {
      handleSearch(search);
    },
    400,
    [search]
  );

  // Hard-code for moving codestream object to front of sortedQuickstarts array - CM
  if (
    (!category && !filters.length && !search) ||
    (category === 'featured' && !filters.length && !search)
  ) {
    // uuid is codestream id specifically - CM
    const codestreamIndex = quickstarts.findIndex(
      ({ id }) => id === '29bd9a4a-1c19-4219-9694-0942f6411ce7'
    );

    if (codestreamIndex > -1) {
      const codestreamObject = quickstarts[codestreamIndex];
      quickstarts = [
        codestreamObject,
        ...quickstarts.slice(0, codestreamIndex),
        ...quickstarts.slice(codestreamIndex + 1),
      ];
    }
  }

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
          clearFilters={clearFilters}
          filtersWithCount={FILTERS}
          categoriesWithCount={CATEGORIES}
          filters={filters}
          category={category}
          handleFilter={handleFilter}
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
                <Button
                  css={css`
                    justify-content: flex-start;
                    padding: 0;
                    margin: 0.5rem 0 0;
                  `}
                  variant={Button.VARIANT.LINK}
                  onClick={() => setIsFilterOverlayOpen(true)}
                >
                  Filters
                </Button>

                <Overlay
                  onCloseOverlay={closeFilterOverlay}
                  isOpen={isFilterOverlayOpen}
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
                      Filter
                    </h3>
                    <div
                      css={css`
                        max-height: 400px;
                        padding-bottom: 3rem;
                        overflow-y: scroll;
                      `}
                    >
                      {FILTERS.map(({ name, type, icon, count }) => (
                        <QuickstartFilter
                          key={name}
                          name={name}
                          type={type}
                          icon={icon}
                          count={count}
                          isChecked={filters.includes(type)}
                          handleFilter={handleFilter}
                        />
                      ))}
                    </div>
                    <div
                      css={css`
                        background: var(--secondary-background-color);
                        width: 100%;
                        height: 4rem;
                        position: absolute;
                        bottom: 0;
                        left: 0;
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
                        onClick={closeFilterOverlay}
                        variant={Button.VARIANT.PRIMARY}
                      >
                        OK
                      </Button>
                    </div>
                  </div>
                </Overlay>
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
                      {CATEGORIES.map(({ displayName, value, count }) => (
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
                        OK
                      </Button>
                    </div>
                  </div>
                </Overlay>
              </div>
            )}
            {isMobile && filters.length > 0 && (
              <Button
                css={css`
                  padding: 0;
                  justify-content: flex-start;
                  color: var(--primary-text-color);
                `}
                onClick={clearFilters}
                variant={Button.VARIANT.LINK}
              >
                <Icon
                  name="fe-x"
                  size="1rem"
                  css={css`
                    border: solid var(--secondary-text-color) 1px;
                    border-radius: 3px;
                    margin: 0 0.5rem 0 0;
                  `}
                />
                {`Clear current (${filters.length}) filters`}
              </Button>
            )}
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              margin-top: 1rem;
            `}
          >
            <QuickstartSort
              css={css`
                align-self: flex-end;
                width: fit-content;
              `}
            />
            <div
              css={css`
                padding: 1.25rem 0;
                font-size: 0.9rem;
                color: var(--secondary-text-color);
                display: flex;
                justify-content: space-between;
              `}
            >
              <span>Showing {quickstarts.length} results</span>

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

                ${view === VIEWS.LIST &&
                css`
                  display: initial;
                `}
              `}
            >
              {filters?.length === 1 && filters[0] === 'documentation' ? (
                // if data source filter is selected, display guided install

                <PackTile
                  id={RESERVED_QUICKSTART_IDS.GUIDED_INSTALL}
                  css={css`
                    ${view === VIEWS.GRID && `height: 100%;`}
                    background-color: var(--tertiary-background-color);
                  `}
                  href={getGuidedInstallStackedNr1Url(
                    NR1_GUIDED_INSTALL_NERDLET
                  )}
                  view={view}
                  metadata={{
                    displayName: 'Guided Install',
                    icon: { url: GUIDED_INSTALL },
                    summary:
                      "Not sure how to get started? We'll walk you through the process of instrumenting your environment so that you can monitor it.",
                  }}
                />
              ) : (
                // else, display build your own quickstart

                <PackTile
                  id={RESERVED_QUICKSTART_IDS.BUILD_YOUR_OWN_QUICKSTART}
                  css={css`
                    ${view === VIEWS.GRID && `height: 100%;`}
                    background-color: var(--tertiary-background-color);
                  `}
                  href={QUICKSTARTS_REPO}
                  view={view}
                  metadata={{
                    displayName: 'Build your own quickstart',
                    icon: { url: BUILD_YOUR_OWN },
                    summary:
                      "Can't find a quickstart with what you need? Check out our README and build your own.",
                  }}
                />
              )}
              {quickstarts.map((quickstart) => (
                <PackTile
                  key={quickstart.id}
                  view={view}
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
  quickstarts: PropTypes.object.isRequired,
  location: PropTypes.object,
  errored: PropTypes.bool,
};

export default QuickstartsPage;
