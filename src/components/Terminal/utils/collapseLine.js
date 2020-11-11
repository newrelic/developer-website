const collapseLine = (line) => {
  return line
    .filter((token) => !token.types.includes('comment'))
    .map((token) => token.content)
    .join('');
};

export default collapseLine;
