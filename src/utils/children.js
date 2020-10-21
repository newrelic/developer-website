import { Children, cloneElement } from 'react';

export const visit = (children, test, fn, parent = null) => {
  Children.toArray(children).forEach((child, idx) => {
    if (test(child, idx, parent)) {
      fn(child, idx, parent);
    } else if (child.props?.children) {
      visit(child.props.children, test, fn, child);
    }
  });
};

export const replaceChildren = (children, test, replace) => {
  return Children.count(children) === 1
    ? replaceChild(children, test, replace)
    : Children.map(children, (child) => replaceChild(child, test, replace));
};

const replaceChild = (child, test, replace) => {
  switch (true) {
    case test(child):
      return replace(child);
    case Boolean(child.props?.children):
      return cloneElement(child, {
        children: replaceChildren(child.props.children, test, replace),
      });
    default:
      return child;
  }
};
