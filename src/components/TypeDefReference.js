import React from 'react';
import Markdown from 'react-markdown';
import PropTypes from 'prop-types';
import styles from './TypeDefReference.module.scss';

const RenderDescription = ({ children }) => (
  <span className={styles.description}>
    <p>{` //`}</p> {children}
  </span>
);

const RenderProperty = (property) => {
  const { type, identifier, description } = property;

  return (
    <div key={identifier.name} className={styles.propertyContainer}>
      <span className={styles.propertyName}>{identifier.name}</span>
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

const TypeDefReference = (typeDef) => {
  const { tags } = typeDef.typeDef;
  const { typedef, property: properties } = tags;
  const { identifier = {} } = typedef.find((tag) => tag.identifier);

  return (
    <div className={styles.container} key={identifier.name}>
      <div className={styles.name}>{identifier.name}</div>
      <div className={styles.block}>
        <div>{`{`}</div>
        {properties.map((property) => RenderProperty(property))}
        <div>{`}`}</div>
      </div>
    </div>
  );
};

RenderDescription.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TypeDefReference;
