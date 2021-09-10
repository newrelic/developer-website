export const sortFeaturedPacks = (packs) => {
  const featuredPacks = packs.filter((pack) =>
    pack.keywords?.includes('featured')
  );
  const nonFeaturedPacks = packs.filter(
    (pack) => !pack.keywords?.includes('featured')
  );
  return [...featuredPacks, ...nonFeaturedPacks];
};
