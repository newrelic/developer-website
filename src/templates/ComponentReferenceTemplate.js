import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

import { CodeBlock } from '@newrelic/gatsby-theme-newrelic';
import ReferenceExample from '../components/ReferenceExample';
import PageLayout from '../components/PageLayout';
import Markdown from '../components/Markdown';
import MethodReference from '../components/MethodReference';
import DevSiteSeo from '../components/DevSiteSeo';
import PropList from '../components/PropList';
import { Section, SectionTitle } from './referenceTemplateStyles';
import IconGallery from '../components/IconGallery';
import TypeDefReference from '../components/TypeDefReference';
import { SdkContext } from '../components/SdkContext';
import Spinner from '../components/Spinner';

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

const ComponentReferenceTemplate = ({ data, location }) => {
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

  const { loaded: sdkLoaded, error: sdkError } = useContext(SdkContext);

  return (
    <>
      <DevSiteSeo title={name} location={location} />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Header title={name} />
        <PageLayout.Content>
          <Section className="intro-text">
            <Markdown>{componentDescription}</Markdown>
          </Section>

          <Section>
            <SectionTitle>Usage</SectionTitle>
            <CodeBlock language="js">{usage}</CodeBlock>
          </Section>

          {examples.length > 0 && (
            <Section>
              <div>
                <SectionTitle>Examples</SectionTitle>
                {sdkLoaded &&
                  examples.map((example, i) => (
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
                {!sdkLoaded && !sdkError && <Spinner />}
                {sdkError && (
                  <div>There was a problem loading this example</div>
                )}
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
                <MethodReference
                  key={i}
                  method={method}
                  css={css`
                    margin-bottom: 4rem;
                  `}
                />
              ))}
            </Section>
          )}

          {typeDefs.length > 0 && (
            <Section>
              <SectionTitle>Type definitions</SectionTitle>
              {typeDefs.map((typeDef, i) => (
                <TypeDefReference
                  key={i}
                  typeDef={typeDef}
                  css={css`
                    &:not(:last-child) {
                      margin-bottom: 2rem;
                    }
                  `}
                />
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
  location: PropTypes.object.isRequired,
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
