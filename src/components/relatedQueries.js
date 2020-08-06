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
    q: (page.frontmatter.tags ?? []).join(' OR '),
  }),
};

export const tags__AND = {
  name: 'Tags as search term (ANDs)',
  params: ({ page }) => ({
    q: (page.frontmatter.tags ?? []).join(' AND '),
  }),
};
