const quote = (str) => `"${str}"`;

export const titleOnly = {
  name: 'Title only',
  params: ({ page }) => ({
    q: page.frontmatter.title,
  }),
};

export const descriptionOnly = {
  name: 'Description only',
  params: ({ page }) => ({
    q: page.frontmatter.description,
  }),
};

export const titleAndDescription = {
  name: 'Title and Description',
  params: ({ page }) => ({
    q: `${page.frontmatter.title} ${page.frontmatter.description}`,
  }),
};

export const tags__OR = {
  name: 'Tags as search term (ORs)',
  params: ({ page }) => ({
    q: (page.frontmatter.tags ?? []).map(quote).join(' OR '),
  }),
};

export const tags__AND = {
  name: 'Tags as search term (ANDs)',
  params: ({ page }) => ({
    q: (page.frontmatter.tags ?? []).map(quote).join(' AND '),
  }),
};

export const tagsWeighted = {
  name: 'Tags weighted',
  params: ({ page }) => ({
    q: (page.frontmatter.tags ?? []).map(quote).join(' OR '),
    search_fields: {
      page: ['tags^10', 'body^5', 'title^3', 'description'],
    },
  }),
};

export const tagsWithTitle = {
  name: 'Title w/ tags',
  params: ({ page }) => ({
    q: [
      page.frontmatter.title,
      ...(page.frontmatter.tags ?? []).map(quote),
    ].join(' OR '),
    search_fields: {
      page: ['tags^10', 'title^5', 'description', 'body'],
    },
  }),
};

export const titleWithWeightsBody = {
  name: 'Title with weight on body',
  params: ({ page }) => ({
    q: page.frontmatter.title,
    search_fields: {
      page: ['body^10'],
    },
  }),
};

export const titleWithWeightsTitle = {
  name: 'Title with weight on title',
  params: ({ page }) => ({
    q: page.frontmatter.title,
    search_fields: {
      page: ['title^10'],
    },
  }),
};
