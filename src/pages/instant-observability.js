import PropTypes from 'prop-types';
import React from 'react';
import { QUICKSTARTS_QUERY } from '../data/constants';
import QuickstartsPage from '../components/quickstarts/QuickstartsPage';

export const getServerData = async () => {
  try {
    const resp = await fetch(process.env.NERDGRAPH_URL, {
      method: 'POST',
      body: JSON.stringify({ query: QUICKSTARTS_QUERY }),
      headers: {
        'Content-Type': 'application/json',
        'Api-Key': process.env.NEW_RELIC_API_KEY,
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
    console.dir(err);
    console.log('Error fetching data from NerdGraph', err.message);

    return {
      props: {
        error: true,
        message: err.message,
      },
    };
  }
};

const QuickstartsPageSSR = ({ serverData, location }) => {
  const quickstarts =
    serverData?.data?.actor?.nr1Catalog?.quickstarts?.results || [];

  return <QuickstartsPage quickstarts={quickstarts} location={location} />;
};

QuickstartsPageSSR.propTypes = {
  serverData: PropTypes.object.isRequired,
};

export default QuickstartsPageSSR;
