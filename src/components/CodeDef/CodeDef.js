import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './CodeDef.module.scss';
import Block from './Block';
import Bracket from './Bracket';
import Comment from './Comment';
import Identifier from './Identifier';
import Keyword from './Keyword';
import NumberValue from './Number';
import Operator from './Operator';
import StringValue from './String';
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
CodeDef.Number = NumberValue;
CodeDef.Operator = Operator;
CodeDef.String = StringValue;
CodeDef.Type = Type;

export default CodeDef;
