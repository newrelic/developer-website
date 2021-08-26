export const githubBaseUrl = 'https://github.com/newrelic/developer-website';

export const SPLITS = {
  CONTRIBUTE_BUTTONS: 'developer-website_right-rail-buttons',
};

export const SPLIT_TRACKING_EVENTS = {
  RELATED_CONTENT_ACTION_CLICKED: 'related_content.contribute_action_clicked',
};

export const SDK_BASE_URL =
  'https://d1zobbh8kytrtv.cloudfront.net/platform/doc-app';

// FIXME: update this to production URL when deployed / launched
export const NR1_LOGIN_URL = 'https://staging-login.newrelic.com/login';

// FIXME: update this to production URL when deployed / launched
export const NR1_BASE_URL = 'https://staging-one.newrelic.com';

export const NR1_PACK_DETAILS_NERDLET =
  'catalog-pack-details.catalog-pack-contents';

export const QUICKSTART_SUPPORT_LEVELS = {
  NEWRELIC: 'NEWRELIC',
  VERIFIED: 'VERIFIED',
  COMMUNITY: 'COMMUNITY',
};

export const QUICKSTART_SUPPORT_CONTENT = {
  [QUICKSTART_SUPPORT_LEVELS.NEWRELIC]: {
    title: 'Built by New Relic',
    content: `Need help? [Visit our Support Center](https://support.newrelic.com) or check out our community forum, [the Explorers Hub](https://discuss.newrelic.com).`,
  },
  [QUICKSTART_SUPPORT_LEVELS.VERIFIED]: {
    title: 'Verified by New Relic',
    content: `Need help? [Visit our Support Center](https://support.newrelic.com) or check out our community forum, [the Explorers Hub](https://discuss.newrelic.com).`,
  },
  [QUICKSTART_SUPPORT_LEVELS.COMMUNITY]: {
    title: 'Built by the community',
    content: `Need help? Visit our community forum, [the Explorers Hub](https://discuss.newrelic.com) to find an answer or post a question.`,
  },
};

export const QUICKSTART_ALERT_TYPES = {
  BASELINE: 'BASELINE',
  OUTLIER: 'OUTLIER',
  STATIC: 'STATIC',
};

export const QUICKSTARTS_REPO =
  'https://github.com/newrelic/newrelic-observability-packs';

export const SIGNUP_LINK = 'https://newrelic.com/signup';
export const LOGIN_LINK = 'https://login.newrelic.com/login';
