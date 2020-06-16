import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './CodeDef.module.scss';
import Block from './Block';
import Bracket from './Bracket';
import Comment from './Comment';
import Identifier from './Identifier';
import Keyword from './Keyword';
import Operator from './Operator';
import Type from './Type';

const CodeDef = ({ className, children }) => (
  <code className={cx(styles.container, className)}>{children}</code>
);

CodeDef.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

CodeDef.Block = Block;
CodeDef.Bracket = Bracket;
CodeDef.Comment = Comment;
CodeDef.Keyword = Keyword;
CodeDef.Identifier = Identifier;
CodeDef.Operator = Operator;
CodeDef.Type = Type;

export default CodeDef;
