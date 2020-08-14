import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Button, ExternalLink, Icon } from '@newrelic/gatsby-theme-newrelic';
import { graphql, useStaticQuery } from 'gatsby';
import Section from './Section';
import Title from './Title';

const Contribute = ({ pageContext }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          repository
        }
      }
    }
  `);

  const { fileRelativePath } = pageContext;

  const {
    siteMetadata: { repository },
  } = site;

  return (
    <Section
      css={css`
          background-color: #edeeee;
        `}>
      <Title>Contribute</Title>
      <Button
        as={ExternalLink}
        href={`${repository}/issues/new/choose`}
        css={css`
          margin-right: 0.5rem;
        `}
        variant={Button.VARIANT.PRIMARY}
        size={Button.SIZE.SMALL}
      >
        <Icon
          name={Icon.TYPE.GITHUB}
          css={css`
            margin-right: 0.5rem;
          `}
        />
        File an issue
      </Button>
      <Button
        as={ExternalLink}
        href={`${repository}/tree/main/${fileRelativePath}`}
        variant={Button.VARIANT.NORMAL}
        size={Button.SIZE.SMALL}
      >
        <Icon
          name={Icon.TYPE.EDIT}
          css={css`
            margin-right: 0.5rem;
          `}
        />
        Edit this page
      </Button>
      <p css={css`
          margin-top: 0.5rem;
          font-size: 0.8rem;
          display: block;
      `}>
        Read our <a href="https://github.com/newrelic/developer-website/blob/main/CONTRIBUTING.md">guide</a> on how to contribute</p>
    </Section>
  );
};

Contribute.propTypes = {
  pageContext: PropTypes.shape({
    fileRelativePath: PropTypes.string,
  }),
};

export default Contribute;
