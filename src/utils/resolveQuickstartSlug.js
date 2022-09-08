const slugify = require('./slugify.js');

const resolveQuickstartSlug = (name, id) => {
  return `/instant-observability/${slugify(name)}/${id}`;
};

module.exports = resolveQuickstartSlug;
