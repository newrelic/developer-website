import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import DevSiteSeo from '../components/DevSiteSeo';
import PackTile from '../components/PackTile';
import PackList from '../components/PackList';
import { Surface } from '@newrelic/gatsby-theme-newrelic';
import * as styles from './observability-packs.module.scss';

const LIST_VIEWS = {
  GRID: 'grid',
  LIST: 'list',
};

const ObservabilityPacksPage = ({ data, listView }) => {
  const {
    allO11YPacks: {
      nodes: [{ observabilityPacks }],
    },
  } = data;

  return (
    <div>
      <h1>Observability Packs Landing</h1>
      <PackList>
        {observabilityPacks.map((pack) => {
          const imgSrc = pack.dashboards?.[0]?.screenshots?.[0];
          return (
            <PackTile
              name={pack.name}
              description={pack.description}
              featuredImageUrl={
                imgSrc || 'https://via.placeholder.com/400x275.png?text=Image'
              }
              to={`/observability-packs/${pack.name}/${pack.id}`}
            >
              {pack.name}
            </PackTile>
          );
        })}
      </PackList>
    </div>
  );
};

ObservabilityPacksPage.defaultProps = {
  listView: 'grid',
};

ObservabilityPacksPage.propTypes = {
  data: PropTypes.object.isRequired,
  listView: PropTypes.oneOf(Object.values(LIST_VIEWS)).isRequired,
};

export const pageQuery = graphql`
  query {
    allO11YPacks {
      nodes {
        observabilityPacks {
          id
          name
          website
          logo
          level
          dashboards {
            description
            name
            screenshots
            url
          }
          alerts {
            definition
            name
            url
          }
          authors
          description
          icon
        }
      }
    }
  }
`;

export default ObservabilityPacksPage;
