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

export const reduceChildren = (children, select, reducer) => {
  return Children.count(children) === 1
    ? transform(children, select, reducer)
    : Children.map(children, (child) => transform(child, select, reducer));
};

const transform = (child, select, reducer) => {
  switch (true) {
    case select(child):
      return reducer(child);
    case Boolean(child.props?.children):
      return cloneElement(child, {
        children: reduceChildren(child.props.children, select, reducer),
      });
    default:
      return child;
  }
};
