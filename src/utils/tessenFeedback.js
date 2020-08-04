import tessen from 'tessen';

const TESSEN_EVENT_NAME = 'pageSentiment';

const TESSEN_TRACK_PROPERTIES = {
  location: 'Public',
  nr_product: 'DEVEX',
  nr_subproduct: 'developer',
};

const USER_IDENTITY = {
  customer_user_full_name: 'Developer Site User',
};

// Load tessen (production) and identify
const initTessen = () => {
  tessen.load(['Segement', 'NewRelic'], {
    Segment: {
      identifiable: false,
      writeKey: 'FoEoyHDGF4dDczR4Vt12vuysG1Rl4n8z',
    },
  });

  // TODO: remove this
  tessen.debugLevel(2);

  // Associate this information with an anonymous user
  // NOTE: if we add authentication, we can pass user ID here
  tessen.identify(USER_IDENTITY);
};

/**
 * Tracks the user sentiment for a page via Tessen. This requires either a
 * sentiment value or a comment.
 *
 * @param {string} path - The path of the current page.
 * @param {string} [sentiment] - The optional user sentiment for the page.
 * @param {string} [comment] - An optional, user-supplied, comment.
 * @param {title} [title] - The title for the current page.
 */
const sendFeedback = ({ path, sentiment, comment = '', title = '' }) => {
  if (!sentiment && !comment) return false;

  initTessen();

  tessen.track(TESSEN_EVENT_NAME, {
    ...TESSEN_TRACK_PROPERTIES,
    sentiment,
    comment,
    pagePath: path,
    pageTitle: title,
  });
};

export default sendFeedback;
