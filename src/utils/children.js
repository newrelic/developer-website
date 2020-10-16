import { Children, cloneElement } from 'react';

export const visit = (children, guard, fn, parent = null) => {
  Children.toArray(children).forEach((child, idx) => {
    if (guard(child, idx, parent)) {
      fn(child, idx, parent);
    } else if (child.props?.children) {
      visit(child.props.children, guard, fn, child);
    }
  });
};

export const reduceChildren = (children, select, reducer, parent = null) => {
  if (typeof children === 'string') {
    return children;
  }

  return Children.map(children, (child, idx) => {
    if (select(child, idx, parent)) {
      return reducer(child, idx, parent);
    }

    if (child.props?.children) {
      return cloneElement(child, {
        children: reduceChildren(child.props.children, select, reducer, child),
      });
    }

    return child;
  });
};
