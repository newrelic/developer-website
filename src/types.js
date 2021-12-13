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
  displayName: PropTypes.string.isRequired,
  description: PropTypes.string,
  previews: PropTypes.arrayOf(PropTypes.shape({ url: PropTypes.string })),
});

export const quickstartAlert = PropTypes.shape({
  displayName: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(QUICKSTART_ALERT_TYPES)).isRequired,
  description: PropTypes.string,
});

export const quickstartDocumentation = PropTypes.shape({
  displayName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string,
});

export const quickstartInstallPlans = PropTypes.shape({
  id: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
});

export const rawQuickstart = PropTypes.shape({
  metadata: PropTypes.shape({
    displayName: PropTypes.string,
    slug: PropTypes.string,
    keywords: PropTypes.array,
    icon: PropTypes.shape({ url: PropTypes.string }),
    summary: PropTypes.string,
    description: PropTypes.string,
    quickstartComponents: PropTypes.array,
    authors: PropTypes.array,
    installer: PropTypes.object,
  }),
  id: PropTypes.string,
  sourceUrl: PropTypes.string,
  supportLevel: PropTypes.oneOf(Object.values(QUICKSTART_SUPPORT_LEVELS)),
});

export const quickstart = PropTypes.shape({
  id: PropTypes.string,
  displayName: PropTypes.string,
  slug: PropTypes.string,
  description: PropTypes.string,
  installer: PropTypes.shape({
    steps: PropTypes.arrayOf(quickstartInstallPlans),
  }),
  alerts: PropTypes.arrayOf(quickstartAlert),
  dashboards: PropTypes.arrayOf(quickstartDashboard),
  documentation: PropTypes.arrayOf(quickstartDocumentation),
});
