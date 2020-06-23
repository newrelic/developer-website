import React, { Fragment, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import FeatherIcon from './FeatherIcon';
import NewRelicIcon from './NewRelicIcon';
import { Link } from 'gatsby';
import cx from 'classnames';
import { BreadcrumbContext } from './BreadcrumbContext';
import styles from './NavigationItems.module.scss';
import { link } from '../types';

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

const NavItem = ({ page, depthLevel, searchTerm, filteredPageNames }) => {
  const crumbs = useContext(BreadcrumbContext).flatMap((x) => x.displayName);
  const isHomePage = crumbs.length === 0 && depthLevel === 0;

  const [isExpanded, setIsExpanded] = useState(
    isHomePage || crumbs.includes(page.displayName)
  );

  const iconLibrary = {
    'Collect data': 'collectData',
    'Build apps': 'buildApps',
    'Automate workflows': 'automation',
    'Explore docs': 'developerDocs',
  };
  const isCurrentPage = crumbs[crumbs.length - 1] === page.displayName;
  const headerIcon = depthLevel === 0 && (
    <NewRelicIcon
      className={styles.headerIcon}
      name={iconLibrary[page.displayName]}
    />
  );
  const display = filteredPageNames
    ? getHighlightedText(page.displayName, searchTerm)
    : page.displayName;

  if (filteredPageNames && !filteredPageNames.includes(page.displayName))
    return null;

  return (
    <li
      key={page.displayName}
      data-depth={depthLevel}
      className={cx(
        { [styles.isCurrentPage]: isCurrentPage },
        { [styles.filterOn]: filteredPageNames }
      )}
    >
      {page.url ? (
        <Link
          className={cx(
            { [styles.isCurrentPage]: isCurrentPage },
            styles.navLink
          )}
          to={page.url}
        >
          <span>
            {headerIcon}
            {display}
          </span>
          {isCurrentPage && (
            <FeatherIcon
              className={styles.currentPageIndicator}
              name="chevron-right"
            />
          )}
        </Link>
      ) : (
        <button
          type="button"
          className={styles.navLink}
          onClick={() => setIsExpanded(!isExpanded)}
          onKeyPress={() => setIsExpanded(!isExpanded)}
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
      {page.children && (
        <ul
          className={cx(styles.nestedNav, {
            [styles.isExpanded]: isExpanded,
          })}
        >
          <NavigationItems
            pages={page.children}
            filteredPageNames={filteredPageNames}
            depthLevel={depthLevel + 1}
            searchTerm={searchTerm}
          />
        </ul>
      )}
    </li>
  );
};

NavigationItems.propTypes = {
  pages: PropTypes.array,
  filteredPageNames: PropTypes.array,
  searchTerm: PropTypes.string,
  depthLevel: PropTypes.number,
};

NavItem.propTypes = {
  page: link.isRequired,
  filteredPageNames: PropTypes.array,
  searchTerm: PropTypes.string,
  depthLevel: PropTypes.number,
};

export default NavigationItems;
