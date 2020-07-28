export const isMdxType = (child, type, { nestedWithin } = {}) => {
  if (nestedWithin) {
    if (
      child?.props?.mdxType === nestedWithin &&
      Array.isArray(child.props.children)
    ) {
      return child.props.children.some(
        (child) => child?.props?.mdxType === type
      );
    }
    return false;
  }
  return child?.props?.mdxType === type;
};
