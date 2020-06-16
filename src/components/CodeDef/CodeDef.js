import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './CodeDef.module.scss';
import Block from './Block';
import Comment from './Comment';
import Identifier from './Identifier';
import Keyword from './Keyword';
import Bracket from './Bracket';
import Type from './Type';

const CodeDef = ({ className, children }) => (
  <code className={cx(styles.container, className)}>{children}</code>
);

CodeDef.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

CodeDef.Block = Block;
CodeDef.Comment = Comment;
CodeDef.Keyword = Keyword;
CodeDef.Identifier = Identifier;
CodeDef.Bracket = Bracket;
CodeDef.Type = Type;

export default CodeDef;
