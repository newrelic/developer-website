import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { CodeBlock } from '@newrelic/gatsby-theme-newrelic';
import PageLayout from '../components/PageLayout';
import Markdown from '../components/Markdown';
import ReferenceExample from '../components/ReferenceExample';
import MethodReference from '../components/MethodReference';
import TypeDefReference from '../components/TypeDefReference';
import ConstantReference from '../components/ConstantReference';
import DevSiteSeo from '../components/DevSiteSeo';
import { SdkContext } from '../components/SdkContext';
import Spinner from '../components/Spinner';

import { Section, SectionTitle } from './referenceTemplateStyles';

const ApiReferenceTemplate = ({ data, location }) => {
  const {
    newRelicSdkApi: {
      name,
      usage,
      description,
      examples,
      methods,
      typeDefs,
      constants,
    },
  } = data;
  const { loaded: sdkLoaded, error: sdkError } = useContext(SdkContext);

  return (
    <>
      <DevSiteSeo title={name} location={location} />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Header title={name} />
        <PageLayout.Content>
          {description && (
            <Section className="intro-text">
              <Markdown source={description} />
            </Section>
          )}

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
                    />
                  ))}
                {!sdkLoaded && !sdkError && <Spinner />}
                {sdkError && <div>There was a problem loading the example</div>}
              </div>
            </Section>
          )}

          {methods.length > 0 && (
            <Section>
              <SectionTitle>API methods</SectionTitle>
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

          {constants.length > 0 && (
            <Section>
              <SectionTitle>Constants</SectionTitle>
              {constants.map((constant, i) => (
                <ConstantReference
                  key={i}
                  constant={constant}
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

ApiReferenceTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($slug: String!) {
    newRelicSdkApi(fields: { slug: { eq: $slug } }) {
      name
      description
      usage
      examples {
        ...ReferenceExample_example
      }
      methods {
        ...MethodReference_method
      }
      typeDefs {
        ...TypeDefReference_typeDef
      }
      constants {
        ...ConstantReference_constant
      }
    }
  }
`;

export default ApiReferenceTemplate;
