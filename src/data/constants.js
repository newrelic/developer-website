export const githubBaseUrl = 'https://github.com/newrelic/developer-website';

export const SPLITS = {
  CONTRIBUTE_BUTTONS: 'developer-website_right-rail-buttons',
};

export const SPLIT_TRACKING_EVENTS = {
  RELATED_CONTENT_ACTION_CLICKED: 'related_content.contribute_action_clicked',
};

export const SDK_BASE_URL =
  'https://d1zobbh8kytrtv.cloudfront.net/platform/doc-app';

export const NR1_LOGIN_URL = 'https://login.newrelic.com/login';
export const NR1_SIGNUP_URL = 'https://newrelic.com/signup';

export const NR1_PACK_DETAILS_NERDLET =
  'catalog-pack-details.catalog-pack-contents';

export const NR1_GUIDED_INSTALL_NERDLET =
  'nr1-install-newrelic.nr1-install-newrelic';

export const NR1_EXPLORER_NERDLET = 'nr1-core.listing';

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
    content: `Need help? Find the author's support resources to the left under **What's included**. Or check out our community forum, the [Explorers Hub](https://discuss.newrelic.com/).
    `,
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

export const SHIELD_LEVELS = ['NEWRELIC', 'VERIFIED'];

export const QUICKSTARTS_REPO =
  'https://github.com/newrelic/newrelic-quickstarts';

export const SIGNUP_LINK = 'https://newrelic.com/signup';
export const LOGIN_LINK = 'https://login.newrelic.com/login';

export const UTM_PARAMETERS = { utm_medium: 'cpc' };
