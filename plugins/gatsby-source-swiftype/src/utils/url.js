exports.appendTrailingSlash = (url) =>
  url.pathname.endsWith('/') ? url : new URL(`${url.pathname}/`, url.origin);

exports.stripTrailingSlash = (url) =>
  url.pathname.endsWith('/')
    ? new URL(url.replace(/\/$/, ''), url.origin)
    : url;
