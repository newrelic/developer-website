import React from 'react';
import { Link } from 'gatsby';
import './BreadcrumbBar.scss';
import Container from './Container';
import PropTypes from 'prop-types';
import { link } from '../types';

const BreadcrumbBar = ({ crumbs, duration }) => (
  <div className="breadcrumbBar">
    <Container>
      <ul className="breadcrumbBar-crumbs">
        {crumbs.map((crumb, index) => (
          <li key={index}>
            {crumb.url ? (
              <Link to={crumb.url}>{crumb.displayName}</Link>
            ) : (
              <span>{crumb.displayName}</span>
            )}
          </li>
        ))}
      </ul>
      {duration && <h3 className="breadcrumbBar-duration">{duration}</h3>}
    </Container>
  </div>
);

BreadcrumbBar.propTypes = {
  crumbs: PropTypes.arrayOf(link),
  duration: PropTypes.string,
};

export default BreadcrumbBar;
