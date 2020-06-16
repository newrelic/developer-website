import React, { Children } from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import styles from './CodeDef.module.scss';

const Content = ({ children, ...props }) => {
  if (Children.toArray(children).length === 0) {
    return null;
  }

  return (
    <span {...props} className={styles.comment}>
      {`//`} {children}
    </span>
  );
};

const renderers = {
  root: Content,
};

const Comment = ({ text }) => <Markdown source={text} renderers={renderers} />;

Content.propTypes = {
  children: PropTypes.node,
};

Comment.propTypes = {
  text: PropTypes.string,
};

export default Comment;
