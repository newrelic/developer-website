import React from 'react';
import PropTypes from 'prop-types';
import { Feedback } from '@newrelic/gatsby-theme-newrelic';
import Section from './Section';
import Title from './Title';

const PageFeedback = ({ page }) => {
  const {
    frontmatter: { path, title },
  } = page;

  return title || path ? (
    <Section>
      <Title>Feedback</Title>
      <Feedback
        onSubmit={({ sentiment, comment }) => {
          console.log({ sentiment, comment, title, path });
        }}
      />
    </Section>
  ) : null;
};

PageFeedback.propTypes = {
  page: PropTypes.shape({
    frontmatter: PropTypes.shape({
      path: PropTypes.string,
      title: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default PageFeedback;
