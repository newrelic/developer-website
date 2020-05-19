/**
 * Create a flat array of breadcrumbs for a given relative url given the
 * site structure (sidenav). Returns an empty array if no match found. NOTE:
 * this function calls itself.
 *
 * @param {string} url - The relative path of the page needing breadcrumbs.
 * @param {Object[]} links - An array of link objects for this level.
 * @param {Object[]} [result] - An array of links representing breadcrumbs.
 * @return {Object[]} An array of link objects representing breadcrumbs.
 */
const createBreadcrumbs = (url, links, result = []) => {
  // if mising url or links, throw an error
  if (!url || !links) {
    throw new Error('createBreadcrumbs: Missing parameters');
  }

  // if url or link is in wrong format, throw an error
  if (typeof url !== 'string' || !Array.isArray(links) || !links.length) {
    throw new Error('createBreadcrumbs: Invalid parameters');
  }

  // check to see if any of the links at this level match the path
  const match = links.find((link) => link.url === url);

  // if we have a link, return the displayName at the end of the result
  if (match) {
    return [...result, { displayName: match.displayName }];
  }

  // Find all the links at this level with children
  const linksWithChildren = links.filter(
    (link) => link.children && link.children.length
  );

  // loop over all links that have children (possible branches)
  return linksWithChildren.reduce((acc, link) => {
    // get the crumbs by calling this function on the children for this link
    const crumbs = createBreadcrumbs(url, link.children, result);

    // if the crumbs are different, we found a valid match below this link
    if (crumbs !== result) {
      // get the details for this link without the children
      const { url, displayName } = link;

      // return the current crumbs, this link, and the crumbs found below
      return [...acc, { url, displayName }, ...crumbs];
    } else {
      // otherwise, this is an invalid branch, just return the result so far
      return acc;
    }
  }, result);
};

export default createBreadcrumbs;
