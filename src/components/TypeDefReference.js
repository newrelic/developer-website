import React from 'react';
import PropTypes from 'prop-types';
import styles from './TypeDefReference.module.scss';
import CodeDef from './CodeDef';

const TypeDefReference = ({ typeDef }) => {
  const { properties, name } = typeDef;

  return (
    <div className={styles.container}>
      <h3 className={styles.name}>
        <code>{name}</code>
      </h3>
      <CodeDef className={styles.typeDef}>
        <CodeDef.Bracket>{'{'}</CodeDef.Bracket>
        <CodeDef.Block>
          {properties.map((property) => (
            <div key={property.name}>
              <CodeDef.Identifier>{property.name}: </CodeDef.Identifier>
              <CodeDef.Type>{property.type}</CodeDef.Type>,{' '}
              <CodeDef.Comment text={property.description} />
            </div>
          ))}
        </CodeDef.Block>
        <CodeDef.Bracket>{'}'}</CodeDef.Bracket>
      </CodeDef>
    </div>
  );
};

TypeDefReference.propTypes = {
  typeDef: PropTypes.shape({
    properties: PropTypes.array,
    name: PropTypes.string,
  }),
};

export default TypeDefReference;
