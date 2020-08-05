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
