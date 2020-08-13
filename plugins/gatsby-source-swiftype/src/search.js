const fetch = require('node-fetch');
const { appendTrailingSlash, stripTrailingSlash } = require('./utils/url');

const normalizeUrl = (urlString) => {
  const prefix = urlString.startsWith('!') ? '!' : '';
  const url = new URL(urlString.replace(/^!/, ''));

  return [prefix + appendTrailingSlash(url), prefix + stripTrailingSlash(url)];
};

module.exports = async (url, params = {}, { engineKey, pageLimit }) => {
  const { page: pageFilters = {} } = params.filters || {};

  const res = await fetch(
    'https://search-api.swiftype.com/api/v1/public/engines/search.json',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...params,
        engine_key: engineKey,
        per_page: pageLimit,
        filters: {
          ...params.filters,
          page: {
            ...pageFilters,
            url: [
              `!${appendTrailingSlash(url)}`,
              `!${stripTrailingSlash(url)}`,
              ...(pageFilters.url || []).flatMap(normalizeUrl),
            ],
          },
        },
      }),
    }
  );

  const { records } = await res.json();

  return records.page;
};
