import React from 'react';
import PropTypes from 'prop-types';
import { Feedback } from '@newrelic/gatsby-theme-newrelic';
import Section from './Section';
import Title from './Title';
import sendFeedback from '../../utils/tessenFeedback';

const PageFeedback = ({ page }) => {
  const {
    frontmatter: { path, title },
  } = page;

  return path ? (
    <Section>
      <Title>Feedback</Title>
      <Feedback
        onSubmit={({ sentiment, comment }) => {
          sendFeedback({ sentiment, comment, path, title });
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
