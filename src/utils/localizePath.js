export const addLeadingSlash = (path) =>
  path.startsWith('/') ? path : `/${path}`;

export const addTrailingSlash = (path) => {
  // we don't care about the origin in this case. We just want to manipulate the path
  const dummyOrigin = 'https://example.com';
  const url = new URL(path, dummyOrigin);

  if (!url.pathname.endsWith('/') && !url.pathname.match(/\.[a-zA-Z]+$/)) {
    url.pathname = `${url.pathname}/`;
  }

  return url.href.replace(url.origin, '');
};

export const localizePath = ({ path, locale }) => {
  if (locale.isDefault) {
    return path;
  }

  const [, base] = path.split('/');

  return base === locale.locale
    ? path
    : `/${locale.locale}${addLeadingSlash(path)}`;
};

export const localizeExternalLink = ({ link, locale }) => {
  if (locale.isDefault) {
    return link;
  }

  const url = new URL(link);

  url.pathname = localizePath({ path: url.pathname, locale });

  return url.href;
};
