import tessen from 'tessen';

const TESSEN_EVENT_NAME = 'pageSentiment';
const TESSEN_PAGE_COMPONENT = 'DevSitePage';

const TESSEN_EVENT_PROPERTIES = {
  eventType: 'click',
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

  tessen.trackUserAction(TESSEN_EVENT_NAME, TESSEN_PAGE_COMPONENT, {
    ...TESSEN_EVENT_PROPERTIES,
    sentiment,
    comment,
    pagePath: path,
    pageTitle: title,
  });
};

export default sendFeedback;
