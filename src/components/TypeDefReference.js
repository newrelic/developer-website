import React from 'react';
import Markdown from 'react-markdown';
import PropTypes from 'prop-types';
import styles from './TypeDefReference.module.scss';

const RenderDescription = ({ children }) => (
  <span className={styles.description}>
    <p>{` //`}</p> {children}
  </span>
);

const RenderProperty = ({ property }) => {
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

const TypeDefReference = ({ typeDef }) => {
  const { properties, identifier } = typeDef;

  return (
    <div className={styles.container} key={identifier.name}>
      <div className={styles.name}>{identifier.name}</div>
      <div className={styles.bracket}>{`{`}</div>
      {properties.map((property, i) => (
        <RenderProperty key={i} property={property} />
      ))}
      <div className={styles.bracket}>{`}`}</div>
    </div>
  );
};

RenderProperty.propTypes = {
  property: PropTypes.shape({
    type: PropTypes.string,
    identifier: PropTypes.shape({
      name: PropTypes.string,
    }),
    description: PropTypes.string,
  }),
};

RenderDescription.propTypes = {
  children: PropTypes.node.isRequired,
};

TypeDefReference.propTypes = {
  typeDef: PropTypes.shape({
    properties: PropTypes.array,
    identifier: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
};

export default TypeDefReference;
