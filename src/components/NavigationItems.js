import React, { Fragment, useState, useContext, useEffect } from 'react';
import { css } from '@emotion/core';
import usePrevious from '../hooks/usePrevious';
import PropTypes from 'prop-types';
import FeatherIcon from './FeatherIcon';
import NewRelicIcon from './NewRelicIcon';
import { Link } from 'gatsby';
import cx from 'classnames';
import { BreadcrumbContext } from './BreadcrumbContext';
import styles from './NavigationItems.module.scss';
import { link } from '../types';
import { useLocation } from '@reach/router';

const iconLibrary = {
  'Collect data': 'collectData',
  'Build apps': 'buildApps',
  'Automate workflows': 'automation',
  'Explore docs': 'developerDocs',
  'Developer champions': 'developerChampions',
  Podcasts: 'podcasts',
  'Try our APIs': 'tryOurAPIs',
};

const normalizeUrl = (url) => url?.replace(/\/$/, '');

const getHighlightedText = (text, highlight) => {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return (
    <span>
      {parts.map((part) =>
        part.toLowerCase() === highlight.toLowerCase() ? <b>{part}</b> : part
      )}
    </span>
  );
};

const isExternal = (url) => url.slice(0, 4) === 'http';

const NavigationItems = ({
  pages,
  filteredPageNames,
  searchTerm,
  depthLevel = 0,
}) => {
  const groupedPages = pages.reduce((groups, page) => {
    const { group = '' } = page;

    return {
      ...groups,
      [group]: [...(groups[group] || []), page],
    };
  }, {});

  return Object.entries(groupedPages).map(([group, pages]) => {
    const showGroup =
      (group && !filteredPageNames) ||
      (group &&
        filteredPageNames &&
        pages.some((el) => filteredPageNames.includes(el.displayName)));

    return (
      <Fragment key={group}>
        {showGroup && (
          <li className={cx(styles.navLink, styles.groupName)}>{group}</li>
        )}
        {pages.map((page, index) => (
          <NavItem
            page={page}
            depthLevel={depthLevel}
            searchTerm={searchTerm}
            filteredPageNames={filteredPageNames}
            key={index}
          />
        ))}
      </Fragment>
    );
  });
};

const NavIcon = ({ page }) => {
  if (iconLibrary[page.displayName]) {
    return (
      <NewRelicIcon
        className={styles.headerIcon}
        name={iconLibrary[page.displayName]}
      />
    );
  }

  return null;
};

const NavItem = ({ page, depthLevel, searchTerm, filteredPageNames }) => {
  const location = useLocation();
  const crumbs = useContext(BreadcrumbContext).flatMap((x) => x.displayName);
  const isHomepage = location.pathname === '/';
  const matchesSearch = filteredPageNames?.includes(page.displayName);
  const hasChangedPage = location.pathname !== usePrevious(location.pathname);
  const [toggleIsExpanded, setToggleIsExpanded] = useState(
    (isHomepage && depthLevel === 0) || crumbs.includes(page.displayName)
  );
  const isExpanded = toggleIsExpanded || matchesSearch;

  useEffect(() => {
    if (hasChangedPage) {
      setToggleIsExpanded(
        (isHomepage && depthLevel === 0) || crumbs.includes(page.displayName)
      );
    }
  }, [hasChangedPage, crumbs, page.displayName, depthLevel, isHomepage]);

  const isCurrentPage =
    normalizeUrl(location.pathname) === normalizeUrl(page.url);

  const isBreadCrumb = crumbs.includes(page.displayName);
  const isToggleable = [
    'Component library',
    'Explore docs',
    'Try our APIs',
    'New Relic One CLI',
  ].includes(page.displayName);
  const headerIcon = depthLevel === 0 && <NavIcon page={page} />;
  const display = filteredPageNames
    ? getHighlightedText(page.displayName, searchTerm)
    : page.displayName;

  if (filteredPageNames && !filteredPageNames.includes(page.displayName)) {
    return null;
  }

  return (
    <>
      <div
        key={page.displayName}
        data-depth={depthLevel}
        className={cx({ [styles.filterOn]: filteredPageNames })}
        css={css`
          padding-left: ${depthLevel > 0
            ? `calc((0.5rem * ${depthLevel}) + ${depthLevel}em)`
            : '0'};

          ${depthLevel === 0 &&
          css`
            &:not(:first-child) {
              margin-top: 2rem;
            }
          `}
        `}
      >
        {page.url ? (
          <Link
            partiallyActive
            onClick={
              isToggleable ? () => setToggleIsExpanded(!toggleIsExpanded) : null
            }
            css={css`
              color: var(--primary-text-color);
            `}
            getProps={({ isCurrent, isPartiallyCurrent }) => {
              if (isCurrent) {
                return { className: cx(styles.navLink, styles.isCurrentPage) };
              }

              if (isPartiallyCurrent) {
                return {
                  className: cx(styles.navLink, styles.isPartiallyCurrent),
                };
              }

              return { className: styles.navLink };
            }}
            to={page.url}
          >
            <span className={styles.navLinkText}>
              {headerIcon}
              {depthLevel > 0 && page.children && (
                <FeatherIcon
                  className={cx(
                    { [styles.isExpanded]: isExpanded },
                    styles.nestedChevron
                  )}
                  name="chevron-right"
                />
              )}
              {display}
            </span>
            {isCurrentPage && (
              <FeatherIcon
                className={styles.currentPageIndicator}
                name="chevron-right"
              />
            )}
            {isExternal(page.url) && <FeatherIcon name="external-link" />}
          </Link>
        ) : (
          <button
            type="button"
            className={cx(
              { [styles.isPartiallyCurrent]: isBreadCrumb },
              styles.navLink
            )}
            onClick={() => setToggleIsExpanded(!toggleIsExpanded)}
            onKeyPress={() => setToggleIsExpanded(!toggleIsExpanded)}
            tabIndex={0}
          >
            {depthLevel > 0 && (
              <FeatherIcon
                className={cx(
                  { [styles.isExpanded]: isExpanded },
                  styles.nestedChevron
                )}
                name="chevron-right"
              />
            )}
            {headerIcon}
            {display}
          </button>
        )}
      </div>
      {page.children && isExpanded && (
        <NavigationItems
          pages={page.children}
          filteredPageNames={filteredPageNames}
          depthLevel={depthLevel + 1}
          searchTerm={searchTerm}
        />
      )}
    </>
  );
};

NavIcon.propTypes = {
  page: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
  }),
};

NavigationItems.propTypes = {
  pages: PropTypes.array.isRequired,
  filteredPageNames: PropTypes.array,
  searchTerm: PropTypes.string,
  depthLevel: PropTypes.number,
};

NavItem.propTypes = {
  page: link,
  filteredPageNames: PropTypes.array,
  searchTerm: PropTypes.string,
  depthLevel: PropTypes.number.isRequired,
};

export default NavigationItems;
