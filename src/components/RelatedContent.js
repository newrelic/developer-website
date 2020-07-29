import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import { Button, ExternalLink, Icon } from '@newrelic/gatsby-theme-newrelic';
import { PageContext } from './PageContext';

const RelatedContent = ({ className }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          repository
        }
      }
    }
  `);
  const { fileRelativePath } = useContext(PageContext);

  const {
    siteMetadata: { repository },
  } = site;

  return (
    <aside className={className}>
      <h4>Contribute</h4>
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
        variant={Button.VARIANT.PLAIN}
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
    </aside>
  );
};

RelatedContent.propTypes = {
  className: PropTypes.string,
};

export default RelatedContent;
