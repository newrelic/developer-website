import PropTypes from 'prop-types';
import React from 'react';
import { Router } from '@reach/router';
import { NERDGRAPH_URL, QUICKSTARTS_QUERY } from '../data/constants';
import QuickstartsPage from '../components/quickstarts/QuickstartsPage';
import QuickstartDetails from '../templates/QuickstartDetails';

export const getServerData = async () => {
  try {
    const resp = await fetch(NERDGRAPH_URL, {
      method: 'POST',
      body: JSON.stringify({ query: QUICKSTARTS_QUERY }),
      headers: {
        'Content-Type': 'application/json',
        'Api-Key': process.env.GATSBY_NEW_RELIC_API_KEY,
      },
    });

    const json = await resp.json();

    if (!resp.ok) {
      throw json.errors;
    }

    return {
      props: {
        error: false,
        data: json.data,
      },
    };
  } catch (err) {
    /* eslint-disable-next-line no-console */
    console.log('Error fetching data from NerdGraph', err.message);

    return {
      props: {
        error: true,
        message: err.message,
      },
    };
  }
};

const QuickstartsPageRouter = ({ serverData }) => {
  const quickstarts =
    serverData?.data?.actor?.nr1Catalog?.quickstarts?.results || [];

  return (
    <Router basepath="/instant-observability">
      <QuickstartsPage quickstarts={quickstarts} path="/" />
      {quickstarts.map((quickstart) => {
        return (
          <QuickstartDetails
            key={quickstart.id}
            path={`/${quickstart.metadata.slug}/${quickstart.id}`}
            rawQuickstart={quickstart}
          />
        );
      })}
    </Router>
  );
};

QuickstartsPageRouter.propTypes = {
  serverData: PropTypes.object.isRequired,
};

export default QuickstartsPageRouter;
