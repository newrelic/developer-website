import { useState, useEffect, useMemo } from 'react';
import { useDebounce } from 'react-use';
import { useQueryParams, useTessen } from '@newrelic/gatsby-theme-newrelic';

export const SORT_DIRS = {
  ASC: 'ASC',
  DESC: 'DESC',
};

const DEFAULT_PARAMS = {
  search: '',
  sort: { by: null, dir: SORT_DIRS.DESC },
  updateURL: false,
};

/**
 * Helper function to track events, given specific conditions.
 *
 * @param {Object} tessen Tessen instance to be used (from useTessen).
 * @param {string} postfix String to be used at the end of the event name.
 * @param {Object} params Params from hook.
 * @param {string} [params.trackingPrefix]
 * @param {string} [params.trackingCategory]
 * @param {any} [data] Optional data to be sent with the event.
 */
const track = (tessen, params, postfix, data = {}) => {
  const { trackingCategory, trackingPrefix } = params;

  const inBrowser = typeof window !== 'undefined';
  const shouldTessenTrack = trackingCategory && trackingPrefix;
  const shouldNewrelicTrack = inBrowser && window.newrelic && trackingPrefix;

  if (shouldTessenTrack) {
    tessen.track(trackingCategory, `${trackingPrefix}${postfix}`, data);
  }
  if (shouldNewrelicTrack) {
    window.newrelic.addPageAction(`${trackingPrefix}${postfix}`, data);
  }
};

/**
 * A collection of `useState` hooks with some optional instrumentation and
 * optional logic to update the URL state.
 *
 * If `updateURL` is set to true, this will manage the filter & search state
 * in the url via `useQueryParams`.
 *
 * If a `trackingPrefix` is supplied, events will be tracked with New Relic
 * Browser (via `PageAction` - assuming the library is available).
 *
 * If a `trackingCategory` is supplied, events will be tracked with Tessen this
 * requires that a `trackingPrefix` is set as well.
 *
 * @todo Provide the option to consume this via context.
 *
 * @example
 * ```js
 * // Just filters and no tracking
 * const { filters, setFilters } = useFilterSearchSort({
 *   filters: { type: 'all' }
 * });
 * ```
 *
 * @example
 * ```js
 * // Just search, tracking with Tessen and NR Browser
 * const { search, setSearch } = useFilterSearchSort({
 *   trackingCategory: 'feature-a',
 *   trackingPrefix: 'featureA'
 * });
 * ```
 *
 * @param {Object} args
 * @param {string} [args.trackingCategory] If set, will be used to track via Tessen.
 * @param {string} [args.trackingPrefix] Used in the beginning of event names.
 * @param {Object<string, any>} [args.filters]
 * @param {string} [args.search]
 * @param {{by: string, dir: 'ASC'|'DESC'}} [args.sort]
 * @param {string} [args.tessenCategory]
 * @param {boolean} [args.updateURL]
 */
const useFilterSearchSort = (args) => {
  const params = useMemo(
    () => ({
      ...DEFAULT_PARAMS,
      ...args,
    }),
    [args]
  );

  const tessen = useTessen();
  const { setQueryParam } = useQueryParams();

  const [filters, setFilters] = useState(params.filters);
  const [search, setSearch] = useState(params.search);
  const [sort, setSort] = useState(params.sort);

  useEffect(() => {
    const { updateURL } = params;
    track(tessen, params, 'Filter', filters);

    if (updateURL) {
      for (const [key, value] of Object.entries(filters)) {
        setQueryParam(key, value);
      }
    }
  }, [filters, params, setQueryParam, tessen]);

  useDebounce(
    () => {
      const { updateURL } = params;
      if (search !== '') {
        track(tessen, params, 'Search', { search });
      }

      if (updateURL) {
        setQueryParam('search', search);
      }
    },
    1000,
    [search, params, setQueryParam, tessen]
  );

  return { search, setSearch, filters, setFilters, sort, setSort };
};

export default useFilterSearchSort;
