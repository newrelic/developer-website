import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { SearchInput } from '@newrelic/gatsby-theme-newrelic';
import { graphql, useStaticQuery } from 'gatsby';
import ComponentListItem from './ComponentListItem';
import pages from '../../data/componentGroup.json';

const ComponentList = ({ onAdd }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const {
    allNewRelicSdkComponent: { nodes },
  } = useStaticQuery(graphql`
    query {
      allNewRelicSdkComponent {
        nodes {
          name
          usage
          description
          constants {
            name
            value
          }
          propTypes {
            defaultValue
            name
            isRequired
            type {
              name
              raw
            }
            description
          }
        }
      }
    }
  `);
  const components = nodes.filter(({ name: componentName }) =>
    componentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const componentGroups = pages.map(({ displayName, children }) => {
    return {
      displayName,
      children: children.map(({ displayName }) => {
        const component = components.find(
          ({ name: componentName }) => componentName === displayName
        );
        return {
          ...component,
        };
      }),
    };
  });

  return (
    <div
      css={css`
        width: 400px;
        overflow: scroll;
        padding: 0;
      `}
    >
      <SearchInput
        style={{ margin: '1rem 0' }}
        placeholder="Search Components"
        onClear={() => setSearchTerm('')}
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />

      {componentGroups.map(({ displayName, children }) => (
        <div key={displayName}>
          <h3
            css={css`
              font-size: 1rem;
              background-color: var(--tertiary-background-color);
              padding: 0.25rem 1rem;
            `}
          >
            {displayName}
          </h3>
          {children.map((component) => (
            <ComponentListItem
              key={component.name}
              component={component}
              onAdd={onAdd}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ComponentList;
