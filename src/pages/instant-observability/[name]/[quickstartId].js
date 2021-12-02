import PropTypes from 'prop-types';
import React from 'react';
import { QUICKSTART_QUERY, NERDGRAPH_URL } from '../../../data/constants';
import QuickstartDetails from '../../../templates/QuickstartDetails';

export const getServerData = async ({ params }) => {
  try {
    const resp = await fetch(NERDGRAPH_URL, {
      method: 'POST',
      body: JSON.stringify({
        query: QUICKSTART_QUERY,
        variables: { id: params.quickstartId },
      }),
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
    // FIXME: FYI, err is an array
    /* eslint-disable-next-line no-console */
    console.log('Error fetching data from NerdGraph', ...err);

    return {
      props: {
        error: true,
        message: err.message,
      },
    };
  }
};

const QuickstartDetailsSSR = ({ serverData }) => {
  const quickstart =
    serverData?.data?.actor?.nr1Catalog?.quickstarts?.results || [];

  return <QuickstartDetails rawQuickstart={quickstart} />;
};

QuickstartDetailsSSR.propTypes = {
  serverData: PropTypes.object.isRequired,
};

export default QuickstartDetailsSSR;
