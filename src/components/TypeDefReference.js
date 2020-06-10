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
  const { type, name, description } = property;

  return (
    <div key={name} className={styles.propertyContainer}>
      <span className={styles.propertyName}>{name}</span>
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
    <div className={styles.container} key={name}>
      <div className={styles.name}>{name}</div>
      <div className={styles.block}>
        <div className={styles.topBracket}>{`{`}</div>
        {properties.map((property, i) => (
          <RenderProperty key={i} property={property} />
        ))}
        <div>{`}`}</div>
      </div>
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
