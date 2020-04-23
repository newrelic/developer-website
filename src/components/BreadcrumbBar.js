import React from 'react';
import { Link } from 'gatsby';
import './BreadcrumbBar.scss';
import Container from './Container';
import PropTypes from 'prop-types';

const BreadcrumbBar = ({ crumbs, duration }) => {
  return (
    <div className="breadcrumbBar">
      <Container>
        <div className="breadcrumbBar-crumbs">
          {crumbs.map((crumb, index) =>
            index > 0 ? (
              <span>
                {' '}
                > <Link key={index}>{crumb}</Link>
              </span>
            ) : (
              <Link key={index}>{crumb}</Link>
            )
          )}
        </div>
        <h3 className="breadcrumbBar-duration">{duration}</h3>
      </Container>
    </div>
  );
};

BreadcrumbBar.propTypes = {
  crumbs: PropTypes.array,
  duration: PropTypes.string,
};

export default BreadcrumbBar;
