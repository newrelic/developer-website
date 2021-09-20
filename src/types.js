import PropTypes from 'prop-types';
import {
  QUICKSTART_SUPPORT_LEVELS,
  QUICKSTART_ALERT_TYPES,
} from './data/constants';

// NOTE: while creating a recursive data structure is feasible,
// it is not very performant.
export const link = PropTypes.shape({
  displayName: PropTypes.string.isRequired,
  url: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.array,
});

export const pageContext = PropTypes.shape({
  fileRelativePath: PropTypes.string,
});

export const quickstartDashboard = PropTypes.shape({
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string,
  screenshots: PropTypes.arrayOf(PropTypes.string),
});

export const quickstartAlert = PropTypes.shape({
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(QUICKSTART_ALERT_TYPES)).isRequired,
  details: PropTypes.string,
});

export const quickstartDocumentation = PropTypes.shape({
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string,
});

export const quickstartInstallPlans = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});

export const quickstart = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  level: PropTypes.oneOf(Object.values(QUICKSTART_SUPPORT_LEVELS)).isRequired,
  description: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string,
  iconUrl: PropTypes.string,
  logoUrl: PropTypes.string,
  websiteUrl: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  dashboards: PropTypes.arrayOf(quickstartDashboard),
  alerts: PropTypes.arrayOf(quickstartAlert),
  documentation: PropTypes.arrayOf(quickstartDocumentation),
  installPlans: PropTypes.arrayOf(quickstartInstallPlans),
});
