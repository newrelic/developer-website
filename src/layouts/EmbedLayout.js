import { Layout } from '@newrelic/gatsby-theme-newrelic';
import PropTypes from 'prop-types';

const EmbedLayout = ({ children, pageContext }) => {
  return <Layout.Main>{children}</Layout.Main>;
};

EmbedLayout.propTypes = {
  children: PropTypes.node,
  pageContext: PropTypes.object,
};

export default EmbedLayout;
