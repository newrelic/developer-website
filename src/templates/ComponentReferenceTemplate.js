import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

import { CodeBlock } from '@newrelic/gatsby-theme-newrelic';
import ReferenceExample from '../components/ReferenceExample';
import PageLayout from '../components/PageLayout';
import Markdown from '../components/Markdown';
import MethodReference from '../components/MethodReference';
import SEO from '../components/Seo';
import PropList from '../components/PropList';
import { Section, SectionTitle } from './referenceTemplateStyles';
import IconGallery from '../components/IconGallery';
import TypeDefReference from '../components/TypeDefReference';

const chartStyles = {
  height: '200px',
};

const previewStyles = {
  AreaChart: chartStyles,
  BarChart: chartStyles,
  BillboardChart: chartStyles,
  FunnelChart: chartStyles,
  HeatmapChart: chartStyles,
  HistogramChart: chartStyles,
  JsonChart: chartStyles,
  LineChart: chartStyles,
  PieChart: chartStyles,
  ScatterChart: chartStyles,
  SparklineChart: chartStyles,
  StackedBarChart: chartStyles,
  TableChart: chartStyles,
  Spinner: {
    height: '16px',
  },
};

const ComponentReferenceTemplate = ({ data }) => {
  const {
    newRelicSdkComponent: {
      name,
      description: componentDescription,
      usage,
      examples,
      methods,
      typeDefs,
      propTypes,
    },
  } = data;

  return (
    <>
      <SEO title={name} />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Header title={name} />
        <PageLayout.Content>
          <Section className="intro-text">
            <Markdown source={componentDescription} />
          </Section>

          <Section>
            <SectionTitle>Usage</SectionTitle>
            <CodeBlock language="js">{usage}</CodeBlock>
          </Section>

          {examples.length > 0 && (
            <Section>
              <div>
                <SectionTitle>Examples</SectionTitle>
                {examples.map((example, i) => (
                  <ReferenceExample
                    key={i}
                    useToastManager={name === 'Toast'}
                    example={example}
                    previewStyle={previewStyles[name]}
                    css={css`
                      &:not(:last-child) {
                        margin-bottom: 2rem;
                      }
                    `}
                  />
                ))}
              </div>
            </Section>
          )}

          {name === 'Icon' && (
            <Section>
              <IconGallery />
            </Section>
          )}

          <Section>
            <SectionTitle>Props</SectionTitle>
            <PropList propTypes={propTypes} />
          </Section>

          {methods.length > 0 && (
            <Section>
              <SectionTitle>Methods</SectionTitle>
              {methods.map((method, i) => (
                <MethodReference key={i} method={method} />
              ))}
            </Section>
          )}

          {typeDefs.length > 0 && (
            <Section>
              <SectionTitle>Type definitions</SectionTitle>
              {typeDefs.map((typeDef, i) => (
                <TypeDefReference key={i} typeDef={typeDef} />
              ))}
            </Section>
          )}
        </PageLayout.Content>
      </PageLayout>
    </>
  );
};

ComponentReferenceTemplate.propTypes = {
  data: PropTypes.object,
};

export const pageQuery = graphql`
  query($slug: String!) {
    newRelicSdkComponent(fields: { slug: { eq: $slug } }) {
      name
      description
      usage
      propTypes {
        ...PropList_propTypes
      }
      examples {
        ...ReferenceExample_example
      }
      methods {
        ...MethodReference_method
      }
      typeDefs {
        ...TypeDefReference_typeDef
      }
    }
  }
`;

export default ComponentReferenceTemplate;
