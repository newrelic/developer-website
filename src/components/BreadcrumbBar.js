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
                >{' '}
                <Link key={index} to={crumb.path}>
                  {crumb.name}
                </Link>
              </span>
            ) : (
              <Link key={index} to={crumb.path}>
                {crumb.name}
              </Link>
            )
          )}
        </div>
        <h3 className="breadcrumbBar-duration">{duration}</h3>
      </Container>
    </div>
  );
};

BreadcrumbBar.propTypes = {
  crumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string,
    })
  ),
  duration: PropTypes.string,
};

export default BreadcrumbBar;
