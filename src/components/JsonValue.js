import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CodeDef from './CodeDef';

const JsonValue = ({ inline, value: rawValue }) => {
  const value = JSON.parse(rawValue);

  if (value == null) {
    return <CodeDef.Keyword>{String(value)}</CodeDef.Keyword>;
  }

  if (Array.isArray(value)) {
    return <ArrayValue inline={inline} value={value} />;
  }

  switch (typeof value) {
    case 'object':
      return <ObjectValue inline={inline} value={value} />;
    case 'string':
      return <CodeDef.String value={value} />;
    case 'number':
      return <CodeDef.Number value={value} />;
    default:
      return value;
  }
};

const ObjectValue = ({ inline, value }) => {
  const PropertyContainer = inline ? Fragment : CodeDef.Block;

  return (
    <>
      <CodeDef.Bracket>{'{ '}</CodeDef.Bracket>
      <PropertyContainer>
        {Object.entries(value).map(([key, value], idx, arr) => {
          const Container = inline ? Fragment : 'div';

          return (
            <Container key={key}>
              <CodeDef.Identifier>{key}: </CodeDef.Identifier>
              <JsonValue inline value={value} />
              {idx !== arr.length - 1 && ', '}
            </Container>
          );
        })}
      </PropertyContainer>
      <CodeDef.Bracket>{' }'}</CodeDef.Bracket>
    </>
  );
};

const ArrayValue = ({ inline, value }) => {
  const ItemContainer = inline ? Fragment : CodeDef.Block;

  return (
    <>
      <CodeDef.Bracket>[</CodeDef.Bracket>
      <ItemContainer>
        {value.map((item, idx) => {
          const Container = inline ? Fragment : 'div';

          return (
            <Container key={idx}>
              <JsonValue inline value={item} />
              {idx !== value.length - 1 && ', '}
            </Container>
          );
        })}
      </ItemContainer>
      <CodeDef.Bracket>]</CodeDef.Bracket>
    </>
  );
};

ArrayValue.propTypes = {
  inline: PropTypes.bool,
  value: PropTypes.array.isRequired,
};

ObjectValue.propTypes = {
  inline: PropTypes.bool,
  value: PropTypes.object.isRequired,
};

JsonValue.propTypes = {
  inline: PropTypes.bool,
  value: PropTypes.string.isRequired,
};

export default JsonValue;
