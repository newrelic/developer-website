const hasOwnProperty = Object.prototype.hasOwnProperty;

const shallowEqual = (a, b) => {
  if (a === b) {
    return true;
  }

  if (typeof a !== 'object' || !a || typeof b !== 'object' || !b) {
    return false;
  }

  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  return aKeys.every((key) => hasOwnProperty.call(b, key) && a[key] === b[key]);
};

export default shallowEqual;
