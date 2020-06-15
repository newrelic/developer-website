import React, { Children } from 'react';
import Markdown from 'react-markdown';
import PropTypes from 'prop-types';
import styles from './TypeDefReference.module.scss';

const RenderDescription = ({ children, ...props }) => {
  if (Children.toArray(children).length === 0) {
    return null;
  }

  return (
    <span {...props} className={styles.description}>
      {` //`} {children}
    </span>
  );
};

const RenderProperty = ({ property }) => {
  const { type, name, description } = property;

  return (
    <div key={name} className={styles.propertyContainer}>
      <span className={styles.propertyName}>{name}:</span>
      <span className={styles.type}>{type}</span>,
      <Markdown
        source={description}
        renderers={{
          root: RenderDescription,
        }}
      />
    </div>
  );
};

const TypeDefReference = ({ typeDef }) => {
  const { properties, name } = typeDef;

  return (
    <div className={styles.container}>
      <h3 className={styles.name}>
        <code>{name}</code>
      </h3>
      <code className={styles.typeDef}>
        <div className={styles.syntax}>{`{`}</div>
        {properties.map((property, i) => (
          <RenderProperty key={i} property={property} />
        ))}
        <div className={styles.syntax}>{'}'}</div>
      </code>
    </div>
  );
};

RenderProperty.propTypes = {
  property: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }),
};

RenderDescription.propTypes = {
  children: PropTypes.node.isRequired,
};

TypeDefReference.propTypes = {
  typeDef: PropTypes.shape({
    properties: PropTypes.array,
    name: PropTypes.string,
  }),
};

export default TypeDefReference;
